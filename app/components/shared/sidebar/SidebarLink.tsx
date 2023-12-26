import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";

type Props = {
  icon: React.ReactNode;
  name: string;
  href: string;
};

const SidebarLink = (props: Props) => {
  const path=usePathname()
  return (
    <Link href={props.href}>
      <div className={cn("flex dark:text-white space-x-2 items-center hover:bg-gray-700 dark:hover:bg-gray-500 p-2 rounded-md", path===props.href?"bg-gray-700":"")}>
        {props.icon}
        <p>{props.name}</p>
      </div>
    </Link>
  );
};

export default SidebarLink;
