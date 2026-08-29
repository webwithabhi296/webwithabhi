import React, { ElementType } from "react";
import { cn } from "@/lib/utils";
import { ContainerProps } from "@/types";

export const Container: React.FC<ContainerProps> = ({
  as: Component = "div",
  fluid = false,
  className,
  children,
}) => {
  const Tag = Component as ElementType;

  return (
    <Tag
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        fluid ? "max-w-full" : "max-w-7xl",
        className
      )}
    >
      {children}
    </Tag>
  );
};
