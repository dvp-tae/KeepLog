import BlogListView from "@/features/blog/components/BlogListView";
import { getBlogListData } from "@/features/blog/model/blog.server";

export default function BlogPage() {
  const posts = getBlogListData();

  return <BlogListView posts={posts} />;
}
