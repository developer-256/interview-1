import { ImageAssets } from "@/assets/ImageAssets";
import MaxContainer from "@/components/MaxContainer";
import { ArrowLeft, ArrowRight, Dot } from "lucide-react";
import Image from "next/image";
import React from "react";

const Insights = () => {
  return (
    <div className="bg-base-blue text-white">
      <MaxContainer className="pt-12">
        <div className="flex items-center justify-between">
          <h3 className="text-7xl font-bold">LATEST INSIGHT</h3>

          <div className="mt-1 w-[500px] border-b-3 border-white font-medium">
            INSPIRED 250+ PEOPLE
          </div>
        </div>

        <div className="mt-9 flex border-t border-white/30">
          <div className="w-[25%] border-r border-white/30 py-20 pr-8">
            <p className="text-7xl font-medium">01.</p>
            <p className="mt-11 text-sm font-light text-white/50">
              Explore the Insight Hub: Your gateway to digital wisdom and
              inspiration. Dive into the latest trends and insights in digital
              marketing and software innovation.
            </p>

            <div className="mt-14 flex items-center gap-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-white/50">
                <ArrowLeft />
              </div>
              <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white">
                <ArrowRight />
              </div>
            </div>
          </div>

          <div className="w-[75%] py-20 pl-24">
            <p className="w-[530px] text-xl font-semibold">
              Unleashing the Power of TikTok Ads: How Brands are Achieving
              Sky-High ROI
            </p>

            <div className="mt-5 mb-4 border-t-2 border-dotted border-white/70" />

            <div className="flex items-center text-sm text-white/50">
              <span>Apr 25, 2025</span>
              <span>
                <Dot />
              </span>
              <span>6 mins read</span>
            </div>

            <div className="mt-9 flex gap-10">
              <div className="h-[500px] max-w-[320px] min-w-[320px] overflow-hidden rounded-2xl">
                <Image
                  src={ImageAssets.Home.Insight}
                  alt="Insight img"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="flex w-full flex-col justify-between">
                <div>
                  <p className="mt-6 text-sm text-white">
                    In a world where digital marketing trends shift at the speed
                    of light, one platform has emerged as a game-changer:
                    TikTok. With its meteoric rise, TikTok has captivated
                    audiences worldwide and proven to be a goldmine for
                    marketers. Imagine a platform where your ads can generate
                    nearly 12 times the initial investment in sales revenue
                    within just six weeks. Intrigued?
                  </p>

                  <button className="text-foreground mt-10 flex h-12 cursor-pointer items-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold hover:bg-white/90">
                    Read More
                    <ArrowRight size={19} />
                  </button>
                </div>

                <p className="mb-3 text-sm font-light text-white/60">
                  by{" "}
                  <span className="font-medium text-white">Simo Berrada</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxContainer>
    </div>
  );
};

export default Insights;
