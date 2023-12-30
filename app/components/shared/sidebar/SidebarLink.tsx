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
    <Link href={props.href}>
      <div
        className={cn(
          "flex items-center space-x-2 rounded-md p-2 hover:bg-black hover:bg-opacity-20 dark:text-white dark:hover:bg-gray-500",
          path === props.href ? "bg-black bg-opacity-30" : "",
        )}
      >
        {props.icon}
        <p>{props.name}</p>
      </div>
    </Link>
  );
};

export default SidebarLink;
