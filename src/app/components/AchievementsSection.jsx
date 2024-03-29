"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "The goal is to turn data into information, and information into insight",
    value: " - Carly Fiorina",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 flex items-center justify-center">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-8 flex items-center">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <p className="text-white text-center text-lg italic font-serif">{achievement.metric}</p>
              <p className="text-white text-center text-lg italic font-serif">{achievement.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
