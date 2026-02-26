import BlogDetailView from "@/features/blog/components/BlogDetailView";
import {
  getBlogPost,
  getBlogStaticParams,
} from "@/features/blog/model/blog.server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export const generateStaticParams = () => {
  return getBlogStaticParams();
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
  };
};

export default async function BlogDetailPage({ params }: PageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailView post={post} />;
}
