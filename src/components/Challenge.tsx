// components/Challenge.tsx
import { Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";

interface ChallengeProps {
  question: string;
  onSubmitAnswer: (points: number) => void;
}

const Challenge: React.FC<ChallengeProps> = ({ question, onSubmitAnswer }) => {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submitted && answer.trim() !== "") {
      setSubmitted(true);
      onSubmitAnswer(5);
      toast.success(`You answered: "${answer}". You've been awarded 5 points!`);
      setAnswer("");
    } else {
      toast.error("Please provide an answer.");
    }
  };

  return (
    <div className="challenge space-y-4">
      <h2 className=" mt-4 mb-12 text-slate-600 font-bold text-xl">
        {question}
      </h2>
      <form onSubmit={handleSubmit}>
        <Textarea
          size="lg"
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={submitted}
          placeholder="Type your answer..."
        />

        <Button className="w-full my-6" type="submit" disabled={submitted}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Challenge;
