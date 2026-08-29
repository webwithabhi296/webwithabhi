import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeadingProps } from "@/types";

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}) => {
  const isCenter = align === "center";
  const isRight = align === "right";

  return (
    <div
      className={cn(
        "mb-8 md:mb-10 max-w-3xl",
        isCenter && "mx-auto text-center",
        isRight && "ml-auto text-right",
        !isCenter && !isRight && "text-left",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-semibold uppercase tracking-wider",
            "bg-primary/20 text-orange-400 border border-orange-500/30 backdrop-blur-md shadow-sm shadow-orange-500/10",
            isCenter && "justify-center"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
