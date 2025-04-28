import React from "react";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";
import Customers from "./_components/Customers";
import RecentCreation from "./_components/RecentCreation/RecentCreation";

const page = () => {
  return (
    <section>
      <Hero className="mt-5" />
      <AboutUs />
      <Customers />
      <RecentCreation />
      {/* <div className="h-10 bg-white"></div> */}
    </section>
  );
};

export default page;
