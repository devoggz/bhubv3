import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { FaCoins } from "react-icons/fa6";

export default function RegionalChampions() {
  return (
    <Card className="w-full mb-6 shadow-sm border">
      <CardHeader className="flex flex-row h-16 justify-between gap-3">
        <div className="flex flex-col bg-emerald-200/50 px-4 p-1 rounded-full">
          <p className="text-sm font-semibold text-indigo-600 ">
            Regional Champions
          </p>
        </div>
        <div className=" flex flex-row gap-3 items-center bg-emerald-200/50 px-4 p-1 rounded-full ">
          <FaCoins className="text-indigo-500" />
          <p className="text-sm text-indigo-500 font-bold">Points</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody></CardBody>
    </Card>
  );
}
