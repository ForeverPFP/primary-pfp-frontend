import { CheckCircle2Icon } from "lucide-react";
import React from "react";
import { Text } from "./text";

interface SuccessProps {
  children: React.ReactNode;
}

export const Success: React.FC<SuccessProps> = ({ children }) => (
  <div className="overflow-x-auto rounded-md bg-green-50 p-4">
    <div className="flex">
      <div className="shrink-0">
        <CheckCircle2Icon
          className="h-5 w-5 text-green-400"
          aria-hidden="true"
        />
      </div>
      <div className="ml-3 block">
        <Text variant={"small"} className="text-green-800">
          {children}
        </Text>
      </div>
    </div>
  </div>
);
