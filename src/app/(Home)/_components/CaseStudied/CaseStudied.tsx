import { ImageAssets } from "@/assets/ImageAssets";
import MaxContainer from "@/components/MaxContainer";
import Image from "next/image";
import React from "react";
import CaseStudiedCarousel from "./CaseStudiedCarousel";

const CaseStudied = () => {
  return (
    <div className="relative py-14">
      <MaxContainer>
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
            <span className="text-primary">Recent</span> Case Studies
          </h2>

          <p className="text-foreground/60 mt-5 text-sm leading-6">
            Embark on an intergalactic journey through our case studies,
            showcasing triumphs from Dubai and beyond. Witness how our digital
            magic transforms challenges into victories.
          </p>
        </div>
      </MaxContainer>

      <CaseStudiedCarousel />
    </div>
  );
};

export default CaseStudied;
