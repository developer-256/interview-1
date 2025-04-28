import MaxContainer from "@/components/MaxContainer";
import { ArrowRight } from "lucide-react";
import React from "react";
import ServicesWithTabs from "./ServicesWithTabs";

const Services = () => {
  return (
    <div className="bg-base-blue pt-14 text-white">
      <MaxContainer className="flex justify-between">
        <div className="text-5xl">
          Our
          <br />
          <span className="font-semibold">Services</span>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex h-8 w-14 items-center justify-center rounded-full bg-white/20 text-white">
            <ArrowRight size={22} />
          </div>

          <div className="max-w-[400px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the {`industry's`} standard dummy
            text ever since the 1500s.
          </div>
        </div>
      </MaxContainer>

      <ServicesWithTabs />
    </div>
  );
};

export default Services;
