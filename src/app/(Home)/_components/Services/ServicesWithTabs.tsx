"use client";
import { ImageAssets } from "@/assets/ImageAssets";
import MaxContainer from "@/components/MaxContainer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const ServicesWithTabs = () => {
  const [active, setActive] = useState(servicesData[0]?.tab ?? "");
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="mt-12">
      <MaxContainer className="flex items-start gap-8">
        {servicesData.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                setActive(item.tab);
                setActiveImg(0);
              }}
              className={cn(
                "cursor-pointer text-white/50",
                active === item.tab && "text-white",
              )}
            >
              {item.tab}

              {item.tab === active && (
                <div className="mx-auto mt-2 h-[2px] max-w-[75%] rounded-full bg-white" />
              )}
            </div>
          );
        })}
      </MaxContainer>

      <div className="mx-auto mt-12 px-5">
        {servicesData
          .find((item) => item.tab === active)
          ?.data.map((item, idx) => {
            return (
              <div
                key={idx}
                className={cn(
                  "relative h-[250px] w-full transition-all duration-300",
                  idx === activeImg && "h-[400px]",
                )}
                onClick={() => setActiveImg(idx)}
              >
                <Image
                  src={item.image}
                  alt={`${active} img`}
                  className={cn(
                    "h-full w-full object-cover object-center transition-all duration-300",
                    idx !== activeImg && "opacity-50 grayscale-25",
                  )}
                />

                <MaxContainer className="absolute right-0 bottom-7 left-0 text-4xl text-shadow-lg">
                  {item.title}
                </MaxContainer>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ServicesWithTabs;

const servicesData = [
  {
    tab: "Digital Marketing",
    data: [
      { image: ImageAssets.Home.S11, title: "SEO" },
      { image: ImageAssets.Home.S12, title: "Social Media Marketing" },
      { image: ImageAssets.Home.S13, title: "Content Marketing" },
      { image: ImageAssets.Home.S14, title: "PPC Marketing" },
    ],
  },
  {
    tab: "Software Development",
    data: [
      { image: ImageAssets.Home.S21, title: "Custom Software Development" },
      { image: ImageAssets.Home.S22, title: "Software Development" },
      { image: ImageAssets.Home.S23, title: "Software Development" },
      { image: ImageAssets.Home.S24, title: "Software Development" },
    ],
  },
  {
    tab: "Product Development",
    data: [{ image: ImageAssets.Home.S31, title: "Product Development" }],
  },
];
