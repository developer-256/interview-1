import { cn } from "@/lib/utils";
import type { StaticImageData } from "next/image";
import React, { useState } from "react";
import { EffectCards, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";
import "./CreationCarouselStyles.css";
import "swiper/css";
import "swiper/css/effect-cards";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const CreationCarousel = ({
  className,
  cards,
}: {
  className?: string;
  cards: {
    image: StaticImageData | string;
    title: string;
    subTitle: string;
  }[];
}) => {
  const [activeIndex, setActiveIndex] = useState(3);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);
  };

  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null,
  );

  const handleSwiper = (swiper: SwiperClass) => {
    setSwiperInstance(swiper);
  };

  return (
    <div className={cn(className, "relative")}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Navigation]}
        className="mySwiper"
        initialSlide={2}
        // navigation
        width={300}
        height={400}
        cardsEffect={{
          perSlideOffset: 20,
          perSlideRotate: 8,
        }}
        onSlideChange={handleSlideChange}
        onSwiper={handleSwiper}
        centeredSlides
      >
        {cards.map((item, idx) => {
          return (
            <SwiperSlide
              key={idx}
              className={cn("rounded-3xl border bg-white p-4 shadow-2xl")}
            >
              <div
                className={cn(
                  "flex h-full w-full flex-col justify-between",
                  idx !== activeIndex &&
                    "opacity-50 transition-all duration-300 ease-in-out",
                )}
              >
                <div>
                  <div
                    className={cn(
                      "h-[220px] w-full overflow-hidden rounded-3xl border",
                    )}
                  >
                    <Image
                      src={item.image}
                      alt={`Image # ${idx + 1}`}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <h3 className="mt-4 text-center text-3xl font-semibold">
                    <span className="font-normal">
                      {item.title.split(" ")[0]}
                    </span>{" "}
                    {item.title.split(" ")[1]}
                  </h3>
                </div>

                <div className="flex items-center justify-between px-3">
                  <p className="text-sm">{item.subTitle}</p>
                  <p className="text-lg font-semibold text-[#FFA500]">
                    {idx < 10 && 0}
                    {idx + 1}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-16">
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="cursor-pointer rounded-full bg-black p-3 text-white hover:bg-black/80 disabled:opacity-50"
          disabled={!swiperInstance || swiperInstance.isBeginning}
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => swiperInstance?.slideNext()}
          className="cursor-pointer rounded-full bg-black p-3 text-white hover:bg-black/80 disabled:opacity-50"
          disabled={!swiperInstance || swiperInstance.isEnd}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CreationCarousel;
