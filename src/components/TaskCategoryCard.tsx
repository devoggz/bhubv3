import React from "react";
import { Card, CardBody, CardFooter, Button, Image } from "@nextui-org/react";

const TaskCategoryCard = () => {
  const list = [
    {
      title: "Quiz Za Pesa",
      img: "/images/bike.jpg",
      points: "2",
    },
  ];
  return (
    <div className="p-6 grid grid-cols-2 gap-3">
      {list.map((item, index) => (
        <Card shadow="sm" key={index}>
          <CardBody className="overflow-visible p-0">
            <Image
              isZoomed
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[120px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-sm justify-between">
            <p className="text-sm font-semibold">{item.title}</p>
          </CardFooter>
          <Button
            className="text-white font-medium"
            color="success"
            radius="full"
            size="sm"
          >
            Start Task
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default TaskCategoryCard;
