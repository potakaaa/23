"use client";

import { galleryImg } from "@/app/provider/global";
import { useActiveIndex } from "@/app/store/globals";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

const Gallery = () => {
  const activeIndex = useActiveIndex((state: any) => state.activeIndex);
  const setActiveIndex = useActiveIndex((state: any) => state.setActiveIndex);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    // Set the current slide (1-based index)
    setActiveIndex(api.selectedScrollSnap());

    // Listen for the "select" event to update the current slide
    api.on("select", () => {
      const newIndex = api.selectedScrollSnap();
      setActiveIndex(newIndex);
      console.log("Updated active index", newIndex);
    });
    console.log(activeIndex);
  }, [api]);

  return (
    <Carousel className="w-60" setApi={setApi}>
      <CarouselContent>
        {galleryImg.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={item}
                    alt={item}
                    width={450}
                    height={450}
                    className="shadow-lg rounded-md"
                    priority={true}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Gallery;
