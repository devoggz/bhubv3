"use client";

import ReactPlayer from "react-player";

export default function SaccoZitujenge() {
  return (
    <div className="container mx-auto p-6 mb-8 bg-gradient-to-r from-slate-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%">
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-tl-xl rounded-tr-xl p-6 mb-4 text-center font-bold text-2xl text-white">
        {" "}
        Tushirikiane, Tufaulu
        <p className="text-sm text-white font-normal">
          Sikia stori za kuinuana kutoka wale wamefaulu{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 mt-6 ">
        <div className="lg:col-span-12 col-span-1 space-y-3">
          <div className="overflow-hidden rounded-2xl  border border-gray-28 bg-blend-soft-light bg-white  shadow-sm">
            <ReactPlayer
              url="https://utfs.io/f/msHXJUCYPHtunolRT7aipKfV9rgQedbshMBWzIEaYu74X5tC"
              className="aspect-square"
              light="https://utfs.io/f/msHXJUCYPHtu0Jd1sVvEN8yWdVDAo2H7eP6KnX1FbihGMJv9"
              width="460px"
              height="600px"
              controls={true}
              playing={false}
              onError={(e) => console.error("Error playing video: ", e)}
            />
          </div>
          <div className="overflow-hidden rounded-2xl  border border-gray-28 bg-blend-soft-light bg-white  shadow-sm">
            <ReactPlayer
              url="https://utfs.io/f/msHXJUCYPHtu5w0JGCr1t5d4q1b02LinFBPEVIfc3DZGlupv"
              className="aspect-square"
              light="https://utfs.io/f/msHXJUCYPHtuAyGT8S1weCYBSIV9tP8F5UDnRmisLfjTyEMG"
              width="460px"
              height="600px"
              controls={true}
              playing={false}
              onError={(e) => console.error("Error playing video: ", e)}
            />
          </div>
          <div className="overflow-hidden rounded-2xl  border border-gray-28 bg-blend-soft-light bg-white  shadow-sm">
            <ReactPlayer
              url="https://utfs.io/f/msHXJUCYPHtuoqFcRkuvNH8JEV0OmPTC2QRf5BuDcF6IZMXq"
              className="aspect-square"
              light="https://utfs.io/f/msHXJUCYPHtusfuSCNLTKvtGPybf1Fq6VR8ae2ANChJjxrso"
              width="460px"
              height="600px"
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
