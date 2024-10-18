"use client";

import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export default function MobileNav() {
  return (
    <div className="rounded-tr-xl rounded-tl-xl sticky inset-x-0 bottom-0 z-30 grid h-16 w-full grid-cols-4 items-center justify-center gap-2 bg-bhgreen shadow-menu-shadow md:hidden">
      <div className="flex flex-col items-center justify-center">
        <Link
          href="/home
        "
          className="inline-block hover:text-bhpink"
        >
          <HomeOutlined className="text-white" height={20} width={10} />
        </Link>
        <p className="text-sm text-white">Home</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Link href="/news" className="inline-block hover:text-bhpink">
          <ClockCircleOutlined className="text-white" />
        </Link>
        <p className="text-sm text-white">News</p>
      </div>
      <div className="flex flex-col  items-center justify-center">
        <Link href="/tasks" className="inline-block  hover:text-bhpink">
          <CheckCircleOutlined className="text-white" />
        </Link>
        <p className="text-sm text-white">Shuguli</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Link href="/profile" className="inline-block hover:text-bhpink">
          <UserOutlined className="text-white" />
        </Link>
        <p className="text-sm text-white">Profile</p>
      </div>
    </div>
  );
}
