import { getPosts } from "../../../../actions/getPosts";
import UserPostCard from "@/components/UserPostCard";

export default async function News() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto p-6 mb-8 bg-gradient-to-r from-slate-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%">
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-tl-xl rounded-tr-xl p-6 mb-4 text-center font-bold text-2xl text-white">
        {" "}
        Trending News
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-6 ">
        <div className="lg:col-span-12 col-span-1">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
            {posts.map((post, index) => (
              <UserPostCard
                key={index}
                videoURL={post.videoURL}
                title={post.title}
                content={post.content}
                category={post.category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
