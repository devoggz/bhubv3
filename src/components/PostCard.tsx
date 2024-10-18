"use client";

// /components/VideoCard.tsx
import React, { Component, useState } from "react";
import { cn } from "@/lib/utils";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Chip } from "@nextui-org/react";

import { RiTv2Line } from "react-icons/ri";
import ReactPlayer from "react-player";
import { useRouter } from "next/navigation";
import { Textarea } from "./ui/textarea";

interface PostCardProps {
  title: string;
  videoURL: string;
  category: string;
  content: string;
}

export default function PostCard({
  title,
  content,
  videoURL,
  category,
}: PostCardProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-28 bg-blend-soft-light bg-white backdrop-blur shadow-sm">
      <div className="leading-0">
        <div className=" aspect-square ">
          <ReactPlayer
            url={videoURL}
            className="react-player"
            width="100%"
            height="100%"
            controls={false}
            playing={false}
            loop={false}
            onError={(e) => console.error("Error playing video: ", e)}
          />

          <div className="p-4">
            <div className="mb-2 flex items-center gap-5">
              <Chip
                className="bg-emerald-50 px-2 text-emerald-800"
                size="sm"
                radius="sm"
                startContent={
                  <RiTv2Line className="text-2xl text-emerald-600 h-4 w-4 mr-2 pointer-events-none flex-shrink-0" />
                }
              >
                {category}
              </Chip>
            </div>

            <h3 className=" p-2 font-bold text-lg tracking-normal">{title}</h3>
            {/* <p className="p-2 text-sm">{content}</p> */}
            <div className="flex flex-row items-center justify-between mt-4 ">
              <Button onClick={() => router.push("#")} variant="link">
                Read More
              </Button>

              <div>
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger asChild>
                    <Button variant="link">Add Comment</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="text-left">
                      <DrawerTitle> Comment</DrawerTitle>
                    </DrawerHeader>
                    <ProfileForm className="px-4" />
                    <DrawerFooter className="pt-2">
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Name</Label>
        <Input type="email" id="email" placeholder="John Doe" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Comment</Label>
        <Textarea id="username" placeholder="Your Comment Here" />
      </div>
      <Button type="submit">Add Comment</Button>
    </form>
  );
}

// "use client";

// // /components/VideoCard.tsx
// import React, { Component } from "react";

// import { Chip, Image } from "@nextui-org/react";
// import Video from "next-video";
// import bodaHub from "/videos/bodaHub.mp4";
// import Player from "next-video/player";
// import { RiTv2Line } from "react-icons/ri";
// import ReactPlayer from "react-player";
// import { CldVideoPlayer } from "next-cloudinary";
// import "next-cloudinary/dist/cld-video-player.css";

// interface PostCardProps {
//   title: string;
//   videoURL: string;
//   category: string;
// }

// export default function PostCard({ title, videoURL, category }: PostCardProps) {
//   return (
//     <div className="overflow-hidden rounded-2xl border border-gray-28 bg-blend-soft-light bg-white backdrop-blur shadow-sm">
//       <div className="leading-0">
//         <div className=" aspect-square ">
//           <CldVideoPlayer
//             showJumpControls={true}
//             muted={false}
//             width="1920"
//             height="1080"
//             src={videoURL}
//           />

//           <div className="p-6 cursor-pointer">
//             <div className="mb-2 flex items-center gap-5">
//               <Chip
//                 className="bg-emerald-50 px-2 text-emerald-800"
//                 size="sm"
//                 radius="sm"
//                 startContent={
//                   <RiTv2Line className="text-2xl text-emerald-600 h-4 w-4 mr-2 pointer-events-none flex-shrink-0" />
//                 }
//               >
//                 {category}
//               </Chip>
//             </div>

//             <h3 className=" p-2 font-bold text-lg tracking-normal">{title}</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
