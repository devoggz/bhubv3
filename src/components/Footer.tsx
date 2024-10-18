"use client";

import clsx from "clsx";
import Link from "next/link";
import { RiFacebookBoxLine } from "react-icons/ri";
import { BsTiktok } from "react-icons/bs";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer>
      <div className={clsx("container-fluid mt-4 mb-4 ", className)}>
        <div className=" flex  flex-col md:mb-6 md:flex-row md:items-center md:justify-between md:border-t md:border-t-gray-lighter md:pt-6 lg:mb-8 lg:pt-8">
          <div className="order-2 pt-4 md:order-none md:pt-0 lg:shrink-0">
            <p className="text-center text-sm font-normal capitalize leading-6 text-gray-dark md:text-left 3xl:text-base">
              Copyright &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://bodahub.net"
                rel="noreferrer noopener"
                target="_blank"
                className="font-bold text-bhgreen hover:underline"
              >
                BodaHub.
              </a>{" "}
              All rights reserved
            </p>
          </div>
          <nav className="order-1 border-b border-gray-lighter pb-4 md:order-none md:border-b-0 md:pb-0">
            <ul className="flex flex-wrap items-center justify-center gap-5 md:justify-end">
              <Link
                className="cursor-pointer"
                href="https://www.facebook.com/profile.php?id=61566402124831"
              >
                <RiFacebookBoxLine size={18} style={{ fill: "gray" }} />
              </Link>

              <Link
                className="cursor-pointer"
                href="https://www.tiktok.com/@bodahub?_t=8qGsnvpKl6c&_r=1"
              >
                <BsTiktok size={16} style={{ fill: "gray" }} />
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
