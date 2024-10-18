"use client";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

import { useRouter } from "next/navigation";

import { CustomButton } from "./CustomButton";

export default function SautiZivume() {
  const router = useRouter();
  return (
    <Card className=" overflow-hidden ">
      <CardBody className="overflow-hidden ">
        <Image
          isZoomed
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/SautiZivume.png"
          width={270}
        />
        <h4 className="font-bold text-sm mt-3 ">Sauti Zivume </h4>
        <small className="text-default-500">Toa maoni yako </small>

        <CustomButton
          onClick={() => router.push("/sautizivume")}
          className="text-tiny mt-3"
          color="bhpink"
          radius="lg"
          size="sm"
        >
          Piga kura yako
        </CustomButton>
      </CardBody>
    </Card>
  );
}
