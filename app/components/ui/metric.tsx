import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function Metric({ children }: Props) {
  return <h1 className="text-3xl font-semibold">{children}</h1>;
}
