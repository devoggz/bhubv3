"use client";

// components/Poll.tsx
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";

interface PollProps {
  question: string;
  onVote: (points: number) => void;
}

const Poll: React.FC<PollProps> = ({ question, onVote }) => {
  const { data: session } = useSession(); // Get user session
  const [voted, setVoted] = useState(false);

  // Check if the user has already voted by accessing local storage or session data
  useEffect(() => {
    if (session) {
      const hasVoted = localStorage.getItem(
        `poll_voted_${session.user?.email}`
      );
      if (hasVoted) {
        setVoted(true); // User has voted
      }
    }
  }, [session]);

  const handleVote = (answer: "yes" | "no") => {
    if (!voted && session) {
      setVoted(true);
      localStorage.setItem(`poll_voted_${session.user?.email}`, "true"); // Save vote state in local storage
      onVote(5); // Award 5 points only on first vote
      toast.success(`You voted ${answer}. You've been awarded 5 points!`);
    } else {
      toast.error("You have already voted!");
    }
  };

  return (
    <div className="poll space-y-6 rounded-lg bg-white border p-4">
      <h2 className="mt-4 mb-12 text-slate-600 font-bold text-2xl">
        {question}
      </h2>
      <div className="flex flex-row gap-4 items-center justify-between">
        {voted ? (
          <Button className="w-full bg-gray-500 cursor-not-allowed" disabled>
            Poll Completed
          </Button>
        ) : (
          <>
            <Button
              className="w-full bg-green-500"
              onClick={() => handleVote("yes")}
            >
              Ndio
            </Button>
            <Button
              variant="destructive"
              className="w-full"
              onClick={() => handleVote("no")}
            >
              La
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Poll;
