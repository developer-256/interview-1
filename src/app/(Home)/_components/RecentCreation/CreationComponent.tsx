"use client";
import { ImageAssets } from "@/assets/ImageAssets";
import MaxContainer from "@/components/MaxContainer";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import CreationCarousel from "./CreationCarousel";

const CreationCards = () => {
  const [active, setActive] = useState("UI/UX Design");
  const cards = creationData.find((item) => item.tab === active)?.cards;

  return (
    <MaxContainer>
      {cards && <CreationCarousel className="mt-16" cards={cards} />}

      <div className="text-foreground/50 mt-32 flex items-start justify-center gap-8 text-sm">
        {creationData.map((item, idx) => {
          return (
            <div
              key={idx}
              className={cn(
                "cursor-pointer",
                active === item.tab && "text-primary font-semibold",
              )}
              onClick={() => setActive(item.tab)}
            >
              {item.tab}

              {item.tab === active && (
                <div className="mx-auto mt-1 h-[3px] max-w-[75%] rounded-full bg-[#FFA500]" />
              )}
            </div>
          );
        })}
      </div>
    </MaxContainer>
  );
};

export default CreationCards;

// prettier-ignore
const creationData = [
  {
    tab: "Custom Software Dev",
    cards: [{ image: ImageAssets.Home.CC1, title: "Custom Software", subTitle: "Dubai Neked" }, { image: ImageAssets.Home.CC2, title: "Custom Software", subTitle: "Coach Lenka" }, { image: ImageAssets.Home.CC3, title: "Custom Software", subTitle: "Dubai Neked" }, { image: ImageAssets.Home.CC4, title: "Custom Software", subTitle: "Coach Lenka" }, { image: ImageAssets.Home.CC5, title: "Custom Software", subTitle: "Dubai Neked" }],
  },
  {
    tab: "Social Media",
    cards: [{ image: ImageAssets.Home.CC1, title: "Social Media", subTitle: "Dubai Neked" }, { image: ImageAssets.Home.CC2, title: "Social Media", subTitle: "Coach Lenka" }, { image: ImageAssets.Home.CC3, title: "Social Media", subTitle: "Dubai Neked" }, { image: ImageAssets.Home.CC4, title: "Social Media", subTitle: "Coach Lenka" }, { image: ImageAssets.Home.CC5, title: "Social Media", subTitle: "Dubai Neked" }]
  },
  {
    tab: "3D Walkthrough",
    cards: [{ image: ImageAssets.Home.CC1, title: "3D Walkthrough", subTitle: "Dubai Neked" }, { image: ImageAssets.Home.CC2, title: "3D Walkthrough", subTitle: "Coach Lenka" }, { image: ImageAssets.Home.CC3, title: "3D Walkthrough", subTitle: "Dubai Neked" }, { image: ImageAssets.Home.CC4, title: "3D Walkthrough", subTitle: "Coach Lenka" }, { image: ImageAssets.Home.CC5, title: "3D Walkthrough", subTitle: "Dubai Neked" }]
  },
  {
    tab: "UI/UX Design",
    cards: [{ image: ImageAssets.Home.CC1, title: "UI Design", subTitle: "Dubai Neked" }, { image: ImageAssets.Home.CC2, title: "UI Design", subTitle: "Coach Lenka" }, { image: ImageAssets.Home.CC3, title: "UI Design", subTitle: "Dubai Neked" }, { image: ImageAssets.Home.CC4, title: "UI Design", subTitle: "Coach Lenka" }, { image: ImageAssets.Home.CC5, title: "UI Design", subTitle: "Dubai Neked" }]
  },
  {
    tab: "Graphics Design",
    cards: [{ image: ImageAssets.Home.CC1, title: "Graphics Design", subTitle: "Dubai Neked" }, { image: ImageAssets.Home.CC2, title: "Graphics Design", subTitle: "Coach Lenka" }, { image: ImageAssets.Home.CC3, title: "Graphics Design", subTitle: "Dubai Neked" }, { image: ImageAssets.Home.CC4, title: "Graphics Design", subTitle: "Coach Lenka" }, { image: ImageAssets.Home.CC5, title: "Graphics Design", subTitle: "Dubai Neked" }]
  },
];
