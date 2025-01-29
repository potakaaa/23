import { Button } from "@/components/ui/button";
import { ArrowLeft, Ban } from "lucide-react";
import React from "react";
import BackButton from "../components/BackButton";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      {/*<Ban className="size-32 text-primary" />*/}
      <Image
        src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-illustration-download-in-svg-png-gif-file-formats--not-found-page-webpage-pack-design-development-illustrations-5501655.png"
        className="w-56"
        width={224} // Equivalent to w-56 (56 * 4 = 224px)
        height={224} // Adjust height accordingly (optional)
        alt="404 Error Illustration"
        priority
      />
      <p className="font-bold text-lg tracking-tight">I'M SORRY</p>
      <p className="font-black text-2xl text-primary drop-shadow">
        I DON'T KNOW YOU
      </p>
      <BackButton />
    </div>
  );
};

export default page;
