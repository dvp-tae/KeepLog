import { getPostBySlug, getSortedPosts } from "@/lib/posts";

export const getBlogListData = () => {
  return getSortedPosts();
};

export const getBlogStaticParams = () => {
  return getSortedPosts().map((post) => ({ slug: post.slug }));
};

export const getBlogPost = async (slug: string) => {
  return getPostBySlug(slug);
};
