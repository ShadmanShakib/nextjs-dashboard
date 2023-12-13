import React from "react";
import { Sidebar } from "@/app/components/shared";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1">{props.children}</div>
    </div>
  );
};

export default layout;
