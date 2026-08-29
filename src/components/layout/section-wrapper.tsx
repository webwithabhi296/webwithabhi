import React, { ElementType } from "react";
import { cn } from "@/lib/utils";
import { SectionWrapperProps } from "@/types";
import { Container } from "./container";

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  as: Component = "section",
  fluid = false,
  containerFluid,
  containerClassName,
  className,
  children,
}) => {
  const Tag = Component as ElementType;

  return (
    <Tag
      id={id}
      className={cn(
        "w-full py-12 md:py-16 lg:py-24 relative overflow-hidden",
        className
      )}
    >
      <Container
        fluid={containerFluid ?? fluid}
        className={containerClassName}
      >
        {children}
      </Container>
    </Tag>
  );
};
