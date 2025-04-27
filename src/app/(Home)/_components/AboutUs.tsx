import { ImageAssets } from "@/assets/ImageAssets";
import MaxContainer from "@/components/MaxContainer";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 left-0 -z-50 mx-auto h-[350px] w-full px-10">
        <Image
          src={ImageAssets.Home.AboutUsGrid}
          className="h-full w-full object-cover object-center"
          alt="About Us Grid"
        />
      </div>

      <section className="pt-10">
        <MaxContainer className="">
          <div className="pl-[30vw]">
            <h2 className="text-5xl font-semibold">
              <span className="text-2xl font-normal text-[#FFA500]">
                A little Bit
              </span>
              <br />
              <span className="text-primary">About</span> Us
            </h2>

            <p className="text-foreground/60 mt-5 pr-20 text-sm leading-6">
              Welcome to SMB DigitalZone a leading digital marketing agency in
              Dubai. We help businesses thrive in the digital world with
              tailored strategies and a dedicated team. Our services include
              SEO, PPC, social media, content and email marketing, web
              development, design, and virtual tours all designed to boost your
              ROI.
            </p>

            <p className="text-foreground/60 mt-5 pr-20 text-sm">
              Let me know if you want it even more concise or in a different
              tone!
            </p>

            <button className="bg-primary hover:bg-primary/90 mt-7 flex h-12 items-center gap-2 rounded-lg px-6 text-sm text-white">
              Read More
              <ArrowRight size={19} />
            </button>
          </div>
        </MaxContainer>

        <div className="h-[500px]" />

        <div className="absolute -bottom-[500px] -z-30 mx-auto h-[900px] w-full px-10 py-2">
          <div className="relative h-full w-full rounded-[50%] border shadow-[0px_-8px_30px_1px_#1521FF1C]">
            <div className="absolute bottom-[470px] left-0 w-[500px]">
              <Image
                src={ImageAssets.Home.AboutUsPerson}
                alt="About Us Person"
                className="h-full w-full object-contain object-center"
              />
            </div>

            <div className="absolute top-16 right-[35%] flex items-center gap-20">
              <div className="flex flex-col items-center">
                <p className="text-center text-3xl font-bold text-[#FFA500]">
                  120
                </p>
                <p className="text-primary text-center font-medium">
                  Web Designs
                </p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-center text-3xl font-bold text-[#FFA500]">
                  156
                </p>
                <p className="text-primary text-center font-medium">
                  Web Development
                </p>
              </div>
            </div>

            <div className="absolute top-44 right-[20%] flex items-center gap-20">
              <div className="flex flex-col items-center">
                <p className="text-center text-3xl font-bold text-[#FFA500]">
                  69
                </p>
                <p className="text-primary text-center font-medium">
                  App Development
                </p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-center text-3xl font-bold text-[#FFA500]">
                  156
                </p>
                <p className="text-primary text-center font-medium">
                  Digital Marketing
                </p>
              </div>
            </div>

            <div className="absolute top-72 right-[7%] flex items-center gap-20">
              <div className="flex flex-col items-center">
                <p className="text-center text-3xl font-bold text-[#FFA500]">
                  156
                </p>
                <p className="text-primary text-center font-medium">
                  SEO Marketing
                </p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-center text-3xl font-bold text-[#FFA500]">
                  169
                </p>
                <p className="text-primary text-center font-medium">
                  Content Marketing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
