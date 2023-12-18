import React from "react";

type Props = {
  title: string;
};

function ListHeader({ title }: Props) {
  return <div>{title}</div>;
}

export default ListHeader;
