import React from "react";
import { Image } from "@nextui-org/react";
import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <div className="overflow-hidden w-full rounded-2xl   bg-blend-soft-light bg-white  shadow-sm">
      <div className="aspect-video  rounded-xl">
        <ReactPlayer
          url="https://utfs.io/f/msHXJUCYPHtuYT6H2eZXhbQLclvsGNOVdJ2DPzKtkIgRSneF"
          className=""
          width="100%"
          height="100%"
          controls={true}
          playing={false}
          light="/images/home-thumb.png"
        />
      </div>
    </div>
  );
};

export default Hero;
