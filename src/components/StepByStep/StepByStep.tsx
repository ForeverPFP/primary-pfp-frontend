import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Checkbox } from "../../../rc/components/ui/checkbox";
import { EnsTwitterRecord } from "../EnsTwitterRecord/EnsTwitterRecord";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SetPrimaryPFP } from "../SetPrimaryPFPSmall";
import { Step } from "./Step";
import { locales } from "@/locales";
import { useGetPrimary } from "@/hooks/useGetPrimary";
import { useUser } from "@/hooks/useUser";
import { withHydratationFix } from "@/hoc/withHydratationFix";

export const StepByStep = withHydratationFix((): React.ReactElement | null => {
  const { ensName, isLoadingEnsName } = useUser();
  const { pfpSet, isLoading: isLoadingPrimaryPFP } = useGetPrimary();
  const [isDelegateCash, setIsDelegateCash] = React.useState(false);

  return (
    <Card>
      <CardHeader className="pb-12">
        <CardTitle>{locales.stepsTitle}</CardTitle>
        <CardDescription>{locales.stepsDescription}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Step
          step={1}
          title={locales.steps[1].title}
          isOk={!!ensName}
          isLoading={isLoadingEnsName}
        >
          <CardDescription className="flex pb-4">
            {locales.steps[1].description}
            <Link
              href={"https://support.ens.domains/howto/registration"}
              className={
                "ml-1 flex items-center text-sm font-bold text-primary underline underline-offset-4"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} className="mr-1" />
              {locales.steps[1].cta}
            </Link>
          </CardDescription>
        </Step>

        <Step
          step={2}
          title={locales.steps[2].title}
          isOk={!!ensName}
          isLoading={isLoadingEnsName}
        >
          <CardDescription className="flex pb-4">
            {locales.steps[2].description}
            <Link
              href={"https://support.ens.domains/howto/set-primary-name"}
              className="ml-1 flex items-center text-sm font-bold text-primary underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} className="mr-1" />
              {locales.steps[2].cta}
            </Link>
          </CardDescription>
        </Step>

        <Step
          step={3}
          title={locales.steps[3].title}
          isOk={pfpSet}
          isLoading={isLoadingPrimaryPFP}
        >
          <CardDescription className="pb-4">
            {locales.steps[3].description}
            <span className="mt-4 flex items-center space-x-2">
              <Checkbox
                id="delegatecash"
                checked={isDelegateCash}
                onCheckedChange={() => setIsDelegateCash(!isDelegateCash)}
              />
              <label
                htmlFor="terms2"
                className="text-sm font-medium leading-none"
              >
                {locales.useDelegateCash}
              </label>
            </span>
          </CardDescription>

          <SetPrimaryPFP useDelegateCash={isDelegateCash} />
        </Step>

        <Step step={4} title={locales.steps[4].title}>
          <CardDescription className="pb-4">
            {locales.steps[4].description}
            <Link
              href={"https://twitter.com/"}
              className="ml-1 mt-3 flex items-center text-sm font-bold text-primary underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} className="mr-1" />
              {locales.steps[4].cta}
            </Link>
          </CardDescription>
        </Step>
      </CardContent>
    </Card>
  );
});

const classes = /** class={ */ {
  cta: "ml-1 flex items-center text-sm font-bold text-primary underline underline-offset-4",
  description: "flex pb-4",
}; /** } */
