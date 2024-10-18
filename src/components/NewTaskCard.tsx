import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

const NewTaskCard = ({ task }: { task: any }) => {
  return (
    <div>
      <Card
        isFooterBlurred
        className="w-[300px] h-[180px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-2 flex-col items-start">
          {/* <p className="text-tiny text-slate-500 uppercase font-bold">
            Know your Bike
          </p> */}
          <h4 className="text-primary font-bold text-xl">{task.title}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={task.image}
        />
        <CardFooter className="absolute  bottom-0 z-10 border-t-1 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-12 h-12 bg-black object-contain"
              src="/images/trophy.png"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white">Points</p>
              <p className="text-bold text-white"> + {task.points}</p>
            </div>
          </div>
          <Button
            className="text-white font-medium"
            color="success"
            radius="full"
            size="sm"
          >
            Start Task
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewTaskCard;
