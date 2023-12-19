import React from "react";
import { Sidebar } from "@/app/components/shared";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return <div className="">{props.children}</div>;
};

export default layout;
