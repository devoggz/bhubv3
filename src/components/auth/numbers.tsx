"use client";

import clsx from "clsx";
import SignUpForm from "./sign-up-form";
import { Image } from "@nextui-org/react";
import NumberForm from "./numbers-form";

export default function Numbers({ className }: { className?: string }) {
  return (
    <div className={clsx("container  mb-12 mt-32 px-4 lg:mb-16", className)}>
      <div className="m-auto w-full max-w-[420px] rounded-lg border border-gray-200 bg-white p-6 pt-9 ">
        <div className="mb-6">
          <h2
            className="mb-1 text-transparent rounded-lg bg-clip-text bg-gradient-to-r    
            from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
            animate-text text-xl font-bold titlecase leading-[48px] "
          >
            Nambari za kujitambulisha
          </h2>
        </div>
        <NumberForm />
        {/* <SocialLogin /> */}
      </div>
    </div>
  );
}
