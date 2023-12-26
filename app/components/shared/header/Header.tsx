import React from "react";
import Link from "next/link";
import { Button } from "../../ui/button";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="h-16 bg-gray-200">
      <Link href={"/dashboard"}>
        <Button>Dashboard</Button>
      </Link>
    </div>
  );
};

export default Header;
