import React from "react";
import Hero from "./_components/Hero";
import AboutUs from "./_components/AboutUs";

const page = () => {
  return (
    <section>
      <Hero className="mt-5" />
      <AboutUs />

      <footer className="h-40 bg-red-50">Fototer</footer>
    </section>
  );
};

export default page;
