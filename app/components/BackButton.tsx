"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      className="w-16 mt-10 transition duration-300 hover:shadow-md animate-slidein [--slidein-delay:300ms] opacity-0"
      variant="outline"
      onClick={() => router.back()}
    >
      <ArrowLeft className="size-16" />
    </Button>
  );
};

export default BackButton;
