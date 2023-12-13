import React from "react";
import Link from "next/link";

type Props = {
  icon: React.ReactNode;
  name: string;
};

const SidebarLink = (props: Props) => {
  return (
    <Link href={"/dashboard"}>
      <div className="flex    dark:text-white space-x-2 items-center hover:bg-gray-100 dark:hover:bg-gray-500 p-2 rounded-md">
        {props.icon}
        <p>{props.name}</p>
      </div>
    </Link>
  );
};

export default SidebarLink;
