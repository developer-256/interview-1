import { ImageAssets } from "@/assets/ImageAssets";
import MaxContainer from "@/components/MaxContainer";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <MaxContainer>
      <div className="">
        <Image
          src={ImageAssets.Home.Hero}
          alt="Hero Image"
          className="h-full w-full object-cover object-center md:bg-red-300"
        />
      </div>
    </MaxContainer>
  );
};

export default Hero;
