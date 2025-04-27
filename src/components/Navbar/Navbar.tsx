import React from "react";
import MaxContainer from "../MaxContainer";
import Image from "next/image";
import { ImageAssets } from "@/assets/ImageAssets";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <MaxContainer className="absolute top-0 right-0 left-0 mt-8 flex w-full items-center justify-between gap-3">
      <Link href={"/"} className="h-10">
        <Image
          src={ImageAssets.Base.Logo}
          alt="Logo"
          className="h-full w-full object-contain object-center"
        />
      </Link>

      <div className="flex items-center gap-8 text-white">
        <Link href={"/"}>Home</Link>
        <Link href={"#"}>About Us</Link>
        <Link href={"#"}>Services</Link>
        <Link href={"#"}>Our Creation</Link>
        <Link href={"#"}>Case Studies</Link>
        <Link href={"#"}>Insight Hub</Link>
        <Link href={"#"}>Careers</Link>
        <Link href={"#"}>Visual Hub</Link>
      </div>

      <Button>{`HIRE US!`}</Button>
    </MaxContainer>
  );
};

export default Navbar;
