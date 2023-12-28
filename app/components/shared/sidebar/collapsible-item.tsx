import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../ui/collapsible";
import { ChevronDown } from "lucide-react";

type Props = {
  children: React.ReactNode;
  name: string;
  icon: React.ReactNode;
};

export default function CollapsibleItem({ children, name, icon }: Props) {
  return (
    <Collapsible className="">
      <CollapsibleTrigger className="w-full rounded-md data-[state=open]:bg-black data-[state=open]:bg-opacity-40">
        <div className="flex items-center justify-between space-x-2 rounded-md p-2 hover:bg-black hover:bg-opacity-20 dark:text-white dark:hover:bg-gray-500">
          <div className="flex items-center space-x-3">
            {icon}
            <p>{name}</p>
          </div>
          <ChevronDown className="h-4 w-4" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-2">{children}</CollapsibleContent>
    </Collapsible>
  );
}
