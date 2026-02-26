import { getSortedPosts } from "@/lib/posts";

export const getHomeRecentPosts = (limit = 3) => {
  return getSortedPosts()
    .slice(0, limit)
    .map((post, index) => ({
      id: post.slug,
      index: String(index + 1).padStart(2, "0"),
      title: post.title,
      description: post.description,
      date: post.date,
    }));
};
