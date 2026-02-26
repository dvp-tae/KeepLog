import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

interface PostFrontmatter {
  title: string;
  description?: string;
  date: string;
  tags?: string[];
  draft?: boolean;
}

export interface PostSummary {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export interface PostDetail extends PostSummary {
  content: string;
}

const postsDirectory = path.join(process.cwd(), "..", "post");
const markdownExtensions = new Set([".md", ".markdown"]);

const isMarkdownFile = (filename: string) => {
  const extension = path.extname(filename).toLowerCase();
  return markdownExtensions.has(extension);
};

const normalizeFrontmatter = (slug: string, frontmatter: PostFrontmatter) => {
  const title = frontmatter.title?.trim() || slug;
  const description = frontmatter.description?.trim() || "";
  const date = frontmatter.date?.trim() || "1970-01-01";
  const tags = Array.isArray(frontmatter.tags)
    ? frontmatter.tags.filter(Boolean).map((tag) => String(tag))
    : [];
  const draft = frontmatter.draft === true;

  return { title, description, date, tags, draft };
};

const getAllMarkdownFiles = () => {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs.readdirSync(postsDirectory).filter(isMarkdownFile);
};

const toSummary = (filename: string): PostSummary | null => {
  const slug = filename.replace(path.extname(filename), "");
  const fullPath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  const normalized = normalizeFrontmatter(slug, data as PostFrontmatter);

  if (normalized.draft) {
    return null;
  }

  return {
    slug,
    title: normalized.title,
    description: normalized.description,
    date: normalized.date,
    tags: normalized.tags,
  };
};

export const getSortedPosts = (): PostSummary[] => {
  return getAllMarkdownFiles()
    .map(toSummary)
    .filter((post): post is PostSummary => post !== null)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
};

export const getPostBySlug = async (
  slug: string,
): Promise<PostDetail | null> => {
  const markdownFile = getAllMarkdownFiles().find(
    (filename) => filename.replace(path.extname(filename), "") === slug,
  );

  if (!markdownFile) {
    return null;
  }

  const fullPath = path.join(postsDirectory, markdownFile);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const normalized = normalizeFrontmatter(slug, data as PostFrontmatter);

  if (normalized.draft) {
    return null;
  }

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content);

  return {
    slug,
    title: normalized.title,
    description: normalized.description,
    date: normalized.date,
    tags: normalized.tags,
    content: processed.toString(),
  };
};
