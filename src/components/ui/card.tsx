import { Heading, Text, headingType } from "./text";

import { cn } from "@/lib/utils";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn("w-full rounded-xl bg-white p-6 shadow-md", className)}>
    {children}
  </div>
);

const CardTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
  as?: headingType;
}> = ({ children, className, as = "h2" }) => (
  <Heading as={as} variant={"h3"} className={cn("mt-0", className)}>
    {children}
  </Heading>
);

const CardDescription: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <Text className="mb-10">{children}</Text>;

export { Card, CardTitle, CardDescription };
