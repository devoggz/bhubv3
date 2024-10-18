"use client";

import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { CustomButton } from "./CustomButton";

export default function TueleweTuinuke() {
  const router = useRouter();

  return (
    <Card className=" overflow-hidden ">
      <CardBody className="overflow-hidden ">
        <Image
          isZoomed
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/TueleweTuinuke.png"
          width={270}
        />
        <h4 className="font-bold text-sm mt-3 ">Tuelewe Tuinuke </h4>
        <small className="text-default-500"> Jibu maswali machache</small>
        {/* <Button size="sm" className="mt-2 bg-primary text-white font-bold">
          Start Quiz
        </Button> */}
        <CustomButton
          onClick={() => router.push("/quiz")}
          className="text-tiny mt-3"
          color="bhpink"
          radius="lg"
          size="sm"
        >
          Aanza kujibu
        </CustomButton>
      </CardBody>
    </Card>
  );
}
