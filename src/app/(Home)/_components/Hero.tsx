"use client";
import { ImageAssets } from "@/assets/ImageAssets";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";

const Hero = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, "relative mx-auto px-5")}>
      <Navbar />

      <Dialog>
        <DialogTrigger className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-between gap-3 rounded-full bg-black/50 p-2 pl-6 text-white !ring-0 !outline-0 backdrop-blur-[16px]">
          Play Video
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
            <Play size={22} />
          </span>
        </DialogTrigger>

        <DialogContent className="h-[450px] min-w-[700px] overflow-hidden p-0">
          <div className="h-full w-full">
            <iframe
              src={
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              }
              allowFullScreen
              className="h-full w-full object-cover object-center"
            />
          </div>
        </DialogContent>

        <DialogOverlay className="bg-black/50" />
      </Dialog>

      <div className="h-[650px] w-full overflow-hidden rounded-3xl">
        <Image
          src={ImageAssets.Home.Hero}
          alt="Hero Image"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute bottom-[100px] left-[100px]">
        <p className="max-w-[500px] text-[40px] leading-14 font-medium text-white text-shadow-lg">
          Transforming Digital into Exquisite Artistry.
        </p>
        <Button className="mt-5 h-14 px-6">Book your consultation now!</Button>
      </div>
    </div>
  );
};

export default Hero;
