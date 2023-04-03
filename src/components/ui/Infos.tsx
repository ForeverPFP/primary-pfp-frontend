import { AlertCircleIcon } from "lucide-react";
import React from "react";
import { Text } from "./text";

interface InfosProps {
  children: React.ReactNode;
}

export const Infos: React.FC<InfosProps> = ({ children }) => (
  <div className="overflow-x-auto rounded-md bg-blue-50 p-4">
    <div className="flex">
      <div className="shrink-0">
        <AlertCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
      </div>
      <div className="ml-3 block">
        <Text variant={"small"} className="text-blue-800">
          {children}
        </Text>
      </div>
    </div>
  </div>
);
