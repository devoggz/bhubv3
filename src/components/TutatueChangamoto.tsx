"use client";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

import { useRouter } from "next/navigation";

import { CustomButton } from "./CustomButton";

export default function TutatueChangamoto() {
  const router = useRouter();
  return (
    <Card className=" overflow-hidden ">
      <CardBody className="overflow-hidden ">
        <Image
          isZoomed
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/TutatueChangamoto.png"
          width={270}
        />
        <h4 className="font-bold text-sm mt-3 ">Tutatue Changamoto </h4>
        <small className="text-default-500">Twaambie tufanye aje</small>

        <CustomButton
          onClick={() => router.push("/challenge")}
          className="text-tiny mt-3"
          color="bhpink"
          radius="lg"
          size="sm"
        >
          Tupe suluhisho
        </CustomButton>
      </CardBody>
    </Card>
  );
}
