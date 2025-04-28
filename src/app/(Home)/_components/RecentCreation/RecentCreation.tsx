import MaxContainer from "@/components/MaxContainer";
import React from "react";
import CreationCards from "./CreationComponent";
import Image from "next/image";
import { ImageAssets } from "@/assets/ImageAssets";

const RecentCreation = () => {
  return (
    <MaxContainer className="relative py-14">
      <div className="absolute top-0 right-0 left-0 -z-10 mx-auto h-[350px] w-full px-10">
        <Image
          src={ImageAssets.Home.AboutUsGrid}
          className="h-full w-full object-cover object-center"
          alt="About Us Grid"
        />
      </div>

      <div className="max-w-[60%]">
        <h2 className="text-5xl font-semibold">
          <span className="text-2xl font-normal text-[#FFA500]">
            Some of our
          </span>
          <br />
          <span className="text-primary">Recent</span> Creation
        </h2>

        <p className="text-foreground/60 mt-5 text-sm leading-6">
          {`"Our Creation"`} is where the digital magic happens! Dive into a
          galaxy of projects where innovation meets creativity, and let our
          cosmic expertise bring your vision to life.
        </p>
      </div>

      <CreationCards />
    </MaxContainer>
  );
};

export default RecentCreation;
