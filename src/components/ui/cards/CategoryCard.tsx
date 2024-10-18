"use client";

import Link from "next/link";
import Image from "next/image";
import type { CategoryTypes } from "@/types";

export default function CategoryCard({ thumbnail, slug, name }: CategoryTypes) {
  return (
    <Link
      href={slug}
      className="group/item relative flex aspect-video h-[140px] w-[220px] flex-col overflow-hidden rounded-xl lg:h-[380px] 2xl:h-[420px] 4xl:h-[500px]"
    >
      <Image
        src={thumbnail}
        alt="category"
        fill
        sizes="(min-width: 320) 100vw, 100vw"
        className="relative z-0 rounded-xl bg-gray-lighter object-cover transition-all duration-500 group-hover/item:scale-110"
      />
      <div className="absolute bottom-0 z-10 h-1/4 w-full bg-gradient-to-t from-gray-dark/90 to-gray-dark/0 transition-all duration-500 group-hover/item:h-1/2 3xl:from-gray-dark/60"></div>
      <div className="relative z-10 mt-auto px-4 pb-2 md:px-7 md:pb-4 3xl:px-9 3xl:pb-9 4xl:px-12 4xl:pb-12">
        <h3 className="text-sm font-semibold  text-white 3xl:text-2xl">
          {name}
        </h3>
      </div>
    </Link>
  );
}
