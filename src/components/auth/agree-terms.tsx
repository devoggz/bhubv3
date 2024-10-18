"use client";

import clsx from "clsx";
import SignUpForm from "./sign-up-form";
import { Image } from "@nextui-org/react";
import NumberForm from "./numbers-form";
import WardStageForm from "./ward-stage-form";
import AgreeTermsForm from "./agree-terms-form";

export default function AgreeTerms({ className }: { className?: string }) {
  return (
    <div className={clsx("container mb-12 mt-8 px-4 lg:mb-16", className)}>
      <div className="flex items-center justify-center mt-6"></div>
      <div className="m-auto w-full max-w-[400px] rounded-lg border border-gray-200 bg-white p-6 pt-9 sm:p-12">
        <div className="mb-6">
          <h2
            className="mb-1 text-transparent rounded-lg bg-clip-text bg-gradient-to-r    
            from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
            animate-text text-xl font-bold titlecase leading-[48px] "
          >
            Agree Terms
          </h2>
        </div>
        <AgreeTermsForm />
        {/* <SocialLogin /> */}
      </div>
    </div>
  );
}
