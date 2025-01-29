import React from "react";
import DatePicker from "./components/DatePicker";
import SubmitDate from "./components/SubmitDate";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center space-y-1">
      <div className="space-y-2 flex flex-col">
        <p className="font-medium tracking-tight text-left">
          What's the date today?
        </p>
        <DatePicker />
        <SubmitDate />
      </div>
    </div>
  );
};

export default page;
