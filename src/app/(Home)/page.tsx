import React from "react";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";

const page = () => {
  return (
    <section>
      <Hero className="mt-5" />
      <AboutUs />
    </section>
  );
};

export default page;
