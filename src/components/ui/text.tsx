import { VariantProps, cva } from "class-variance-authority";

import React from "react";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700",
      h3: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      blockquote:
        "mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200",
      lead: "text-xl text-slate-700 dark:text-slate-400",
      large: "text-lg font-semibold text-slate-900 dark:text-slate-50",
      small: "text-sm font-medium leading-none",
      subtle: "text-sm text-slate-500 dark:text-slate-400",
    },
    colors: {
      primary: "text-slate-900 dark:text-slate-50",
      secondary: "text-slate-700 dark:text-slate-400",
    },
  },
  defaultVariants: {
    variant: "p",
    colors: "primary",
  },
});

export type headingType = "h1" | "h2" | "h3" | "h4";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof textVariants> {
  as?: headingType;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, children, colors, as = "h1", ...props }, ref) => {
    const Comp = as;
    const defaultVariant = variant ?? as;
    return (
      <Comp
        className={cn(
          textVariants({ variant: defaultVariant, colors, className })
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Heading.displayName = "Heading";

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, children, colors, ...props }, ref) => {
    return (
      <p
        className={cn(textVariants({ variant, colors, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    );
  }
);
Text.displayName = "Text";

export { Heading, Text, textVariants };
