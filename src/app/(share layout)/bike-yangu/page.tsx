"use client";

import ReactPlayer from "react-player";

export default function BikeYangu() {
  return (
    <div className="container mx-auto p-6 mb-8 bg-gradient-to-r from-slate-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%">
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-tl-xl rounded-tr-xl p-6 mb-4 text-center font-bold text-2xl text-white">
        {" "}
        Yaani Bike Yangu Inanibamba
        <p className="text-sm text-white font-normal">
          Kwa nini wanaboda wanasifu bike zao
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 mt-6 ">
        <div className="lg:col-span-12 col-span-1 space-y-3">
          <div className="overflow-hidden rounded-2xl  border border-gray-28 bg-blend-soft-light bg-white  shadow-sm">
            <ReactPlayer
              url="https://utfs.io/f/msHXJUCYPHtulu3r1oPRs7cvb3ySXE9WAYOQMh4dneoZfDPG"
              className="aspect-square"
              width="460px"
              height="600px"
              light="https://utfs.io/f/msHXJUCYPHtuYi4YF9ZXhbQLclvsGNOVdJ2DPzKtkIgRSneF"
              controls={true}
              playing={false}
              onError={(e) => console.error("Error playing video: ", e)}
            />
          </div>
          <div className="overflow-hidden rounded-2xl  border border-gray-28 bg-blend-soft-light bg-white  shadow-sm">
            <ReactPlayer
              url="https://utfs.io/f/msHXJUCYPHtug63GfAyikubBv2yCT0cfQUsMGEOxjD6zaHXr"
              className="aspect-square"
              width="460px"
              height="600px"
              light="https://utfs.io/f/msHXJUCYPHtug67ISHyikubBv2yCT0cfQUsMGEOxjD6zaHXr"
              controls={true}
              playing={false}
              onError={(e) => console.error("Error playing video: ", e)}
            />
          </div>
          <div className="overflow-hidden rounded-2xl  border border-gray-28 bg-blend-soft-light bg-white  shadow-sm">
            <ReactPlayer
              url="https://utfs.io/f/msHXJUCYPHtuytuulQ0sZYx7gQ8v5UI4HXaMyDiFWRBcwb6z"
              className="aspect-square"
              width="460px"
              height="600px"
              light="https://utfs.io/f/msHXJUCYPHtuFpGwv2xP7ieUhoXyaOqgn5VNDc2KW48klsMz"
              controls={true}
              playing={false}
              onError={(e) => console.error("Error playing video: ", e)}
            />
          </div>
          <div className="overflow-hidden rounded-2xl  border border-gray-28 bg-blend-soft-light bg-white  shadow-sm">
            <ReactPlayer
              url="https://utfs.io/f/msHXJUCYPHtuDSMoqV9aNn5W9dZx2UwXSz71cMeQgqGrlRDi"
              className="aspect-square"
              width="460px"
              height="600px"
              light="https://utfs.io/f/msHXJUCYPHtu22mq7JnfEbRuwYtj8vNmhcF1npaTeogXOzlZ"
              controls={true}
              playing={false}
              onError={(e) => console.error("Error playing video: ", e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
