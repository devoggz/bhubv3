"use client";

import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { CustomButton } from "./CustomButton";
import { useRouter } from "next/navigation";

export default function StoriZaPesa() {
  const router = useRouter();

  return (
    <Card className=" overflow-hidden ">
      <CardBody className="overflow-hidden ">
        <Image
          isZoomed
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/StoriPesa.png"
          width={270}
        />
        <h4 className="font-bold text-sm mt-3 ">Stori za pesa </h4>
        <small className="text-default-500">Fedha na bima </small>
        <CustomButton
          onClick={() => router.push("/storizapesa")}
          className="text-tiny mt-3"
          color="bhpink"
          radius="lg"
          size="sm"
        >
          Jionee Shughuli
        </CustomButton>
      </CardBody>
    </Card>
  );
}
