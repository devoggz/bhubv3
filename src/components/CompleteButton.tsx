import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { Button } from "./ui/button";

interface CompleteButtonProps {
  onComplete: () => void; // Callback function to notify parent component
}

const CompleteButton: React.FC<CompleteButtonProps> = ({ onComplete }) => {
  const [Btn, setBtn] = useState(false);
  const [awarded, setAwarded] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => window.removeEventListener("resize", detectSize);
  }, []);

  // Check if the points were already awarded
  useEffect(() => {
    const awardedPoints = localStorage.getItem("points_awarded");
    if (awardedPoints) {
      setAwarded(true);
    }
  }, []);

  const handleClick = () => {
    if (!awarded) {
      setBtn(true);
      setAwarded(true);
      localStorage.setItem("points_awarded", "true"); // Save awarded state
      onComplete(); // Notify parent component
    }
  };

  return (
    <>
      <Button
        className={`w-full ${awarded ? "bg-gray-500" : "bg-bhgreen"}`}
        onClick={handleClick}
        disabled={awarded}
      >
        {awarded ? "Points Awarded" : "Get Points"}
      </Button>
      {Btn && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          tweenDuration={1000}
        />
      )}
    </>
  );
};

export default CompleteButton;
