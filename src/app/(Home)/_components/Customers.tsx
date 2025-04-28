import MaxContainer from "@/components/MaxContainer";
import React from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ImageAssets } from "@/assets/ImageAssets";
import Image from "next/image";

const Customers = () => {
  return (
    <div className="bg-base-blue relative py-12 text-white">
      <div className="absolute top-0 right-0 left-0 mx-auto h-[350px] w-full px-10">
        <Image
          src={ImageAssets.Home.ValuedCustomerGrid}
          className="h-full w-full object-cover object-center"
          alt="About Us Grid"
        />
      </div>

      <MaxContainer>
        <h3>Our Most</h3>
        <p className="text-5xl font-semibold">
          <span className="text-primary">Valued</span> Customers
        </p>
      </MaxContainer>

      <div className="mt-12">
        <InfiniteSlider speedOnHover={16} gap={40} speed={60}>
          {ImageAssets.Customers.map((item, idx) => {
            return (
              <Image
                key={idx}
                src={item}
                alt={`Customer ${idx}`}
                className="h-16 w-full"
              />
            );
          })}
        </InfiniteSlider>
      </div>
    </div>
  );
};

export default Customers;
