import { ImageAssets } from "@/assets/ImageAssets";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Hero = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, "relative mx-auto px-5")}>
      <Navbar />

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
