"use client";
import React from "react";
import { ChevronDown, Dot } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

type Props = {
  icon: React.ReactNode;
  name: string;
  href: string;
};

const SidebarLink = (props: Props) => {
  const path = usePathname();
  return (
    <Collapsible className="">
      <CollapsibleTrigger className="w-full">
        <div className="flex items-center justify-between space-x-2 rounded-md p-2 hover:bg-black hover:bg-opacity-20 dark:text-white dark:hover:bg-gray-500">
          <div className="flex items-center space-x-3">
            {props.icon}
            <p>{props.name}</p>
          </div>
          <ChevronDown className="h-4 w-4" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Link href={props.href}>
          <div
            className={cn(
              "flex items-center space-x-2 rounded-md p-2 hover:bg-black hover:bg-opacity-20 dark:text-white dark:hover:bg-gray-500",
              path === props.href ? "bg-black bg-opacity-30" : "",
            )}
          >
            <Dot />
            <p>{props.name}</p>
          </div>
        </Link>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default SidebarLink;
