import React from "react";
import PuzzlePage from "./puzzle/page";
import DatePicker from "./components/client/DatePicker";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center space-y-1">
      <div className="">
        <p className="font-medium tracking-tight text-left">
          What's the date today?
        </p>
        <DatePicker />
      </div>
    </div>
  );
};

export default page;
