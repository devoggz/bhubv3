"use client";

import clsx from "clsx";
import SignInForm from "./sign-in-form";
import { Image, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import UserButton from "../UserButton";

export default function SignIn({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <div className={clsx("container mb-12 mt-8 px-4 lg:mb-16", className)}>
      <div className="m-auto w-full max-w-[496px] rounded-lg border border-gray-200 bg-white p-6 pt-9 sm:p-12">
        <div className="flex items-center justify-center">
          <Image
            width={150}
            height={120}
            src="/images/logomark.png"
            alt="logo"
          />
        </div>
        <div className="mb-6">
          <h2 className="mb-3 mt-4 text-3xl font-bold titlecase leading-[48px] text-primary">
            Sign In
          </h2>
          <p className="text-base leading-5 text-gray">
            Karibu! Please enter your details
          </p>
        </div>
        <SignInForm />
        <div className="mt-2 mb-2">
          <p className="text-center text-small">
            Need to create an account?{" "}
            <Link
              className="cursor-pointer"
              size="sm"
              onPress={() => router.replace("/signup")}
            >
              Sign up
            </Link>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
