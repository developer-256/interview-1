import MaxContainer from "@/components/MaxContainer";
import React from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ImageAssets } from "@/assets/ImageAssets";
import Image from "next/image";

const Customers = () => {
  return (
    <div className="bg-base-blue py-12 text-white">
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
