import { cn } from "@/lib/utils";
import type { StaticImageData } from "next/image";
import React from "react";

const CreationCarousel = ({
  className,
  //   cards,
}: {
  className?: string;
  cards: {
    image: StaticImageData | string;
    title: string;
    subTitle: string;
  }[];
}) => {
  return <div className={cn(className)}>CreationCarousel</div>;
};

export default CreationCarousel;
