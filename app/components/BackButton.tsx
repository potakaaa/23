"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      className="mt-10 transition duration-300 hover:shadow-md"
      variant="outline"
      onClick={() => router.back()}
    >
      <ArrowLeft className="size-16" />
    </Button>
  );
};

export default BackButton;
