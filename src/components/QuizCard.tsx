"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import React from "react";
import { CustomButton } from "./CustomButton";

const QuizCard = () => {
  const router = useRouter();
  return (
    <div>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          {/* <p className="text-tiny text-white/60 uppercase font-bold">New</p> */}
          {/* <h4 className="text-white font-bold text-xl">Complete Quiz</h4> */}
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://images.pexels.com/photos/28001561/pexels-photo-28001561/free-photo-of-a-gas-station-with-cars-parked-in-front-of-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-white text-lg font-bold">Complete Quiz</p>
            <p className="text-white text-tiny">Earn +10 points.</p>
          </div>
          <CustomButton
            onClick={() => router.push("/quiz")}
            className="text-tiny"
            color="bhpink"
            radius="full"
            size="lg"
          >
            Start Quiz
          </CustomButton>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuizCard;
