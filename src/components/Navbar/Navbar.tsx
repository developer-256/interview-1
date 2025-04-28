import React from "react";
import MaxContainer from "../MaxContainer";
import Image from "next/image";
import { ImageAssets } from "@/assets/ImageAssets";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  FolderSearch,
  Globe,
  MousePointerClick,
  PencilRuler,
  Smartphone,
  SquareTerminal,
  TextSelect,
  Volume,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

        <DropdownMenu>
          <DropdownMenuTrigger className="flex cursor-pointer items-center gap-2 !ring-0 !outline-0">
            Servies <ChevronDown size={18} />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="relative mt-3">
            <Accordion type="single" collapsible>
              {dropdownData.map((item, idx) => {
                return (
                  <AccordionItem value={`item-${idx}`} key={idx}>
                    <AccordionTrigger className="w-[260px] py-1.5 hover:no-underline [&_svg]:mt-1.5 [&_svg]:mr-3">
                      <DropdownMenuLabel>{item.label}</DropdownMenuLabel>
                    </AccordionTrigger>

                    <AccordionContent>
                      {item.data.map((Item, idx) => {
                        return (
                          <DropdownMenuItem
                            key={idx}
                            className="hover:!bg-primary hover:!text-white hover:[&_svg]:!text-white"
                          >
                            <Item.icon /> {Item.name}
                          </DropdownMenuItem>
                        );
                      })}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </DropdownMenuContent>
        </DropdownMenu>

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

const dropdownData = [
  {
    label: "Digital Marketing",
    data: [
      { name: "SEO", icon: FolderSearch },
      { name: "Social Media Marketing", icon: Volume },
      { name: "PPC Marketing", icon: MousePointerClick },
      { name: "Content Marketing", icon: TextSelect },
    ],
  },
  {
    label: "Software Development",
    data: [
      { name: "Custom Software Development", icon: SquareTerminal },
      { name: "Mobile App Development", icon: Smartphone },
      { name: "Web Development", icon: Globe },
      { name: "UI/UX Designing", icon: PencilRuler },
    ],
  },
];
