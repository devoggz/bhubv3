"use client";

import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Challenge from "@/components/Challenge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { SwapLeftOutlined } from "@ant-design/icons";

const ChallengePage = () => {
  const router = useRouter();
  const [points, setPoints] = useState(0);

  const handleSubmitAnswer = (pointsToAdd: number) => {
    setPoints((prevPoints) => prevPoints + pointsToAdd);
  };

  return (
    <div className="container-fluid mx-auto h-screen p-6 mb-16 bg-gradient-to-r from-slate-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%">
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-tl-xl rounded-tr-xl p-6 mb-6 text-center font-bold text-2xl text-white">
        {" "}
        Tutatue changamoto
        <p className="text-sm text-white font-normal">
          Je, shida hii inavyoweza kutatuliwa vipi?
        </p>
      </div>
      <div className="flex flex-col gap-6 mb-12 ">
        {" "}
        <Challenge
          question=" Kiasi cha wananchi wa Kenya hufikiria wanaboda ni wahalifu au wanahusika na crime.... Ni nini wanboda wanaweza kufanya ili watu waone ni wananchi waaminifu? "
          onSubmitAnswer={handleSubmitAnswer}
        />
        <p className="bg-emerald-200/50 rounded-xl my-4 p-2 font-bold text-3xl text-bhgreen text-center">
          +{points} points
        </p>
        <ToastContainer />
      </div>

      <Button
        className="w-full"
        variant="ghost"
        onClick={() => router.push("/tasks")}
      >
        <SwapLeftOutlined className="mr-4 w-6 h-6" />
        Return to Tasks
      </Button>
    </div>
  );
};

export default ChallengePage;
