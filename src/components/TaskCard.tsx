import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { mama, riders } from "../../public/images";
import { Image } from "@nextui-org/react";

const TaskCard = ({ task }: { task: any }) => {
  return (
    <Card>
      <div className="flex flex-row items-center justify-between px-4 mb-4 mt-4">
        <h3 className="text-lg font-bold text-emerald-700">{task.title}</h3>
        <div className="bg-emerald-300/50 px-2  rounded-full">
          <p className="font-bold text-sm text-emerald-600 p-2">
            {" "}
            + {task.points} Points
          </p>
        </div>
      </div>
      <CardBody>
        <div className=" w-full aspect-video">
          <Image
            isZoomed
            slot="poster"
            src={task.image}
            width={1200}
            className="object-cover rounded-lg"
            alt="task"
          />
        </div>
      </CardBody>
      <CardFooter>
        <Button variant="faded" className="w-full">
          Start Quiz
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
