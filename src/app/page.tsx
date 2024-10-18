"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Image } from "@nextui-org/react";

export default function App() {
  const router = useRouter();
  return (
    <div className="container flex flex-col gap-4 items-center justify-center align-middle p-2">
      <Image
        isZoomed
        src="/images/home.png"
        alt="welcome"
        height={400}
        className="w-full object-cover"
      />
      <div className="flex flex-col p-4 items-center justify-center   ">
        <h2
          className="text-6xl font-bold p-4 text-bhgreen 
            "
        >
          BodaHub
        </h2>
        <p className="text-slate-500 text-wrap font-bold text-sm text-center">
          Tujengane kama wanaboda wa Kenya
        </p>
        <p className="text-lg font-semibold text-bhpink">Tuchanuane Tuinuane</p>
      </div>
      <Button
        onClick={() => router.push("/login")}
        className="bg-bhgreen rounded-full"
        size="lg"
      >
        Jiunge sasa
      </Button>
    </div>
  );
}
