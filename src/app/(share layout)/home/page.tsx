"use client";

import { useEffect, useState } from "react";
import { getUserPosts } from "../../../../actions/getUserPosts";
import Hero from "@/components/Hero";
import { Suspense } from "react";

import ContentCard from "@/components/ContentCard";
import HomeCategoryBlock from "@/components/HomeCategoryBlock";
import ReactPlayer from "react-player";

export default function Home() {
  const [userposts, setUserposts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const posts = await getUserPosts();
      setUserposts(posts);
    }
    fetchData();
  }, []);

  return (
    <div className="container p-4 mb-12  ">
      <div className="overflow-hidden rounded-2xl ">
        <ReactPlayer
          url="https://utfs.io/f/msHXJUCYPHtuZsAKOeWE2yB1rHlw0xbE5JjXPFtCpRshSvDW "
          className="react-player"
          width="100%"
          height="100%"
          controls={true}
          playing={false}
          onError={(e) => console.error("Error playing video: ", e)}
        />
        {/* <Video src={videoURL} /> */}
      </div>
      <h3 className="mt-4 mb-4 text-bhpink font-bold text-lg">
        Aina ya Habari kutoka kwa Wanaboda
      </h3>
      <HomeCategoryBlock />

      <div className="grid grid-cols-1  mt-3 ">
        <div className=" ">
          <div className="grid grid-cols-1 gap-4 ">
            {userposts.map((userPost, index) => (
              <ContentCard
                key={index}
                postId={userPost.id}
                videoURL={userPost.videoURL}
                content={userPost.content}
                title={userPost.title}
                category={userPost.category}
                thumbnailURL={userPost.thumbnailURL}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-4">
            <div className="mb-">{/* <Leaderboard /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
