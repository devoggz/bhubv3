"use client";

import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CompleteButton from "./CompleteButton";
import Confetti from "react-confetti";

type Question = {
  question: string;
  options: string[];
  answer: number; // Index of the correct answer
};

const quizQuestions: Question[] = [
  {
    question: "Bike gani kati ya hizi ni aina ya electric?",
    options: ["TVS", "Roam", "Captain", "Boxer", "Skygo"],
    answer: 1, // b. Roam
  },
  // Add other questions here...
];

const Quiz = () => {
  const router = useRouter();
  const [Btn, setBtn] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: 0,
    height: 0,
  });

  const detectSize = () => {
    if (typeof window !== "undefined") {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure this code only runs on the client
      detectSize();
      window.addEventListener("resize", detectSize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", detectSize);
      }
    };
  }, []);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>(
    Array(quizQuestions.length).fill(-1)
  );
  const [score, setScore] = useState<number | null>(null); // State to hold the score

  const handleOptionClick = (optionIndex: number) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let calculatedScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].answer) {
        calculatedScore += 2; // 2 points per correct answer
      }
    });
    setScore(calculatedScore); // Set the calculated score
  };

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    calculateScore(); // Calculate score on completion
  };

  return (
    <div className="p-6 border rounded-bl-xl rounded-br-xl shadow-sm bg-white">
      {/* Instructions Section */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg">
          Sheria za Maswali au Chemsha Bongo
        </h2>
        {/* Instructions content */}
      </div>

      {/* Quiz Questions */}
      {score === null ? (
        <>
          <div className="space-y-6">
            <p className="font-bold text-wrap text-xl">
              {quizQuestions[currentQuestionIndex].question}
            </p>
            <RadioGroup
              defaultValue={userAnswers[currentQuestionIndex]?.toString() || ""}
              onValueChange={(value) => handleOptionClick(Number(value))}
            >
              {quizQuestions[currentQuestionIndex].options.map(
                (option, optionIndex) => (
                  <div
                    className="flex items-center space-x-2"
                    key={optionIndex}
                  >
                    <RadioGroupItem
                      value={optionIndex.toString()}
                      id={`option-${optionIndex}`}
                      checked={
                        userAnswers[currentQuestionIndex] === optionIndex
                      }
                    />
                    <Label htmlFor={`option-${optionIndex}`}>{option}</Label>
                  </div>
                )
              )}
            </RadioGroup>
          </div>

          <div className="flex flex-row gap-8 mt-8">
            <Button
              className="bg-bhgreen w-full"
              disabled={currentQuestionIndex === 0}
              onClick={handlePrevious}
            >
              Previous
            </Button>

            {currentQuestionIndex < quizQuestions.length - 1 ? (
              <Button className="bg-bhgreen w-full" onClick={handleNext}>
                Next
              </Button>
            ) : (
              <>
                <Button
                  className="bg-bhgreen full"
                  onClick={(e) => {
                    setBtn(!Btn);
                    handleComplete(e);
                  }}
                >
                  Complete
                </Button>
                {Btn && typeof window !== "undefined" && (
                  <Confetti
                    width={windowDimension.width}
                    height={windowDimension.height}
                    tweenDuration={1000}
                  />
                )}
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="text-center ">
              <h2 className="text-2xl font-bold">Quiz Complete!</h2>
              <p className="mt-4 font-bold text-xl">Your score:</p>
              <h1>
                {score} / {quizQuestions.length * 2}
              </h1>
            </div>
            <CompleteButton onComplete={() => handleComplete} />
            <Button
              onClick={() => router.push("/tasks")}
              className="w-full bg-bhgreen mt-6"
            >
              Return to Tasks
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
