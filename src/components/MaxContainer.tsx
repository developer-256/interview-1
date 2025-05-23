import { cn } from "@/lib/utils";
import React, { type ReactNode } from "react";

const MaxContainer = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl px-4 md:px-10", className)}
    >
      {children}
    </div>
  );
};

export default MaxContainer;
