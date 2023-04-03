import React from "react";
import { Text } from "./text";
import { XCircleIcon } from "lucide-react";

interface ErrorProps {
  children: React.ReactNode;
}

export const Error: React.FC<ErrorProps> = ({ children }) => (
  <div className="overflow-x-auto rounded-md bg-red-50 p-4">
    <div className="flex">
      <div className="shrink-0">
        <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
      </div>
      <div className="ml-3 block">
        <Text variant={"small"} className="text-red-800">
          {children}
        </Text>
      </div>
    </div>
  </div>
);
