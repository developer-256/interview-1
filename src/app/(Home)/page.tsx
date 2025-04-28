import React from "react";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Customers from "./_components/Customers";
import RecentCreation from "./_components/RecentCreation/RecentCreation";
import Services from "./_components/Services/Services";
import Insights from "./_components/Insights";
import CaseStudied from "./_components/CaseStudied/CaseStudied";

const page = () => {
  return (
    <section>
      <Hero className="mt-5" />
      <AboutUs />
      <Services />
      <Customers />
      <RecentCreation />
      <Insights />
      <CaseStudied />
    </section>
  );
};

export default page;
