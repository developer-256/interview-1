/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import MaxContainer from "../MaxContainer";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ImageAssets } from "@/assets/ImageAssets";
import { Facebook, LinkedIn, Twitter } from "@/assets/Icons/Icon";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-base-blue text-white">
      <MaxContainer className="my-24">
        <section className="flex flex-col items-center">
          <p className="text-center text-4xl leading-13 font-bold">
            Contact Us & <br /> {`Let's`} Build Your Dream Project.
          </p>

          <Button
            variant={"secondary"}
            className="mt-10 h-12 px-6 font-semibold uppercase"
          >
            Contact Us
          </Button>
        </section>

        <section className="mt-20 grid grid-cols-4 gap-5">
          <div>
            <h4 className="font-bold">Links</h4>

            <div className="mt-3 flex flex-col gap-2">
              {FooterData.Links.map((Item, idx) => {
                return (
                  <Link
                    href={Item.url}
                    key={idx}
                    className="text-sm text-white/80"
                  >
                    {Item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-bold">Services</h4>

            <div className="mt-4 flex flex-col gap-2.5">
              {FooterData.Services.map((Item, idx) => {
                return (
                  <div key={idx} className="text-sm text-white/80">
                    {Item}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-span-2 ml-5">
            <h4 className="font-bold">Focus</h4>

            <div className="mt-4 grid grid-cols-2 grid-rows-7 gap-8 gap-y-2.5">
              {FooterData.Focus.map((Item, idx) => {
                return (
                  <div key={idx} className="text-sm text-white/80">
                    {Item}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div>
          <div className="my-10 border-t border-white" />

          <div className="flex items-center justify-between">
            <Link href={"/"} className="h-11">
              <Image
                src={ImageAssets.Base.Logo}
                alt="Logo"
                className="h-full w-full object-cover object-center"
              />
            </Link>

            <p className="text-xs">
              © {date.getFullYear()} SMB DigitalZone. All Rights Reserved.
            </p>

            <div className="flex items-center gap-3">
              {FooterData.Social.map((Item, idx) => {
                return (
                  <Link
                    href={Item.url}
                    key={idx}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white"
                  >
                    <Item.icon className="size-5 text-white" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </MaxContainer>
    </footer>
  );
};
export default Footer;

const FooterData = {
  Links: [
    { name: "Home", url: "#" },
    { name: "About Us", url: "#" },
    { name: "Our Creation", url: "#" },
    { name: "Case Studies", url: "#" },
    { name: "Insight Hub", url: "#" },
    { name: "Careers", url: "#" },
    { name: "Visual Hub", url: "#" },
  ],
  Services: [
    "SEO Services",
    "Social Media Marketing",
    "PPC Marketing",
    "Content Marketing",
    "Custom Software Development",
    "Mobile App Development",
    "Web Development",
    "UI/UX Designing",
  ],
  Focus: [
    "Brand Loyalty",
    "Market Research & Analysis",
    "Responsive Designs",
    "Social Media Content",
    "Development",
    "Graphic Design",
    "Media Production",
    "E-Commerce",
    "Website Maintenance",
    "Virtual Tour",
    "Brand Identity",
    "Performance Optimization",
  ],
  Social: [
    { name: "Facebook", icon: Facebook, url: "#" },
    { name: "LinkedIn", icon: LinkedIn, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
  ],
};
