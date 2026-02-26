import HomePageView from "@/features/home/components/HomePageView";
import { getHomeRecentPosts } from "@/features/home/model/home.server";

export default function HomePage() {
  const posts = getHomeRecentPosts();

  return <HomePageView posts={posts} />;
}
