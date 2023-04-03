import { Card, CardDescription, CardTitle } from "../ui/card";

import { locales } from "@/locales";

export const BaseCard: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Card className="overflow-x-hidden">
    <CardTitle>{locales.bindYourPfp}</CardTitle>
    <CardDescription>{locales.selectNft}</CardDescription>
    {children}
  </Card>
);
