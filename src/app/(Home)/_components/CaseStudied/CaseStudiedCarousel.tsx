import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ImageAssets } from "@/assets/ImageAssets";
import { ArrowRight } from "lucide-react";

const CaseStudiedCarousel = () => {
  return (
    <div className="relative mt-14">
      <Carousel
        opts={{
          loop: true,
          slidesToScroll: 2,
          align: "center",
          dragFree: true,
        }}
      >
        <CarouselContent className="">
          <CarouselItem className={cn("relative basis-[37%] pl-4")}>
            <div
              className={cn(
                "flex h-[280px] items-center justify-center overflow-hidden rounded-3xl border",
              )}
            >
              <Image
                src={ImageAssets.Home.CS1}
                alt="Case Study 1"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <span className="absolute right-8 bottom-5 z-10 text-3xl font-semibold text-white">
              01
            </span>
          </CarouselItem>

          <CarouselItem className={cn("basis-[37%] pl-4")}>
            <div
              className={cn(
                "bg-base-blue h-[280px] overflow-hidden rounded-3xl border p-8 text-white",
              )}
            >
              <p className="text-2xl font-semibold">
                Building Trust & Consultations Through Social Media Storytelling
              </p>

              <p className="mt-4 text-sm text-white/50">
                The {`clinic's`} social media presence initially needed to
                improve, with generic graphics that failed to resonate with
                potential patients on a personal level.
              </p>

              <button className="text-foreground mt-8 flex h-11 cursor-pointer items-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold hover:bg-white/90">
                Read More
                <ArrowRight size={19} />
              </button>
            </div>
          </CarouselItem>

          <CarouselItem className={cn("relative basis-[37%] pl-4")}>
            <div
              className={cn(
                "flex h-[220px] items-center justify-center overflow-hidden rounded-3xl border",
              )}
            >
              <Image
                src={ImageAssets.Home.CS2}
                alt="Case Study 1"
                className="h-full w-full object-cover object-center brightness-50"
              />
            </div>

            <span className="absolute right-8 bottom-20 z-10 text-3xl font-semibold text-white">
              03
            </span>

            <div className="absolute bottom-20 left-8 z-10 max-w-[400px] text-xl font-semibold text-white">
              Building Trust and Consultations Through Social Media Storytelling
              <p className="mt-2 text-sm font-normal text-white/90">
                The {`clinic's`} social media presence initially needed to
                improve, with generic
              </p>
            </div>
          </CarouselItem>

          <CarouselItem className={cn("relative basis-[37%] pl-4")}>
            <div
              className={cn(
                "flex h-[220px] items-center justify-center overflow-hidden rounded-3xl border",
              )}
            >
              <Image
                src={ImageAssets.Home.CS3}
                alt="Case Study 3"
                className="h-full w-full object-cover object-center brightness-50"
              />
            </div>

            <span className="absolute right-8 bottom-20 z-10 text-3xl font-semibold text-white">
              04
            </span>

            <div className="absolute bottom-20 left-8 z-10 max-w-[400px] text-xl font-semibold text-white">
              Transformation of E-commerce Platform
              <p className="mt-2 text-sm font-normal text-white/90">
                The slow loading times, unresponsiveness, and security
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>

        <div className="absolute -top-24 right-14 w-36">
          <CarouselNext className="bg-base-blue hover:bg-base-blue/80 top-1/2 right-4 h-12 w-12 -translate-y-1/2 cursor-pointer text-white hover:text-white" />
          <CarouselPrevious className="bg-base-blue hover:bg-base-blue/80 top-1/2 left-4 h-12 w-12 -translate-y-1/2 cursor-pointer text-white hover:text-white" />
        </div>
      </Carousel>
    </div>
  );
};

export default CaseStudiedCarousel;
