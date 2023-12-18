import React from "react";
import Board from "./Board";
type Props = {};

function page({}: Props) {
  return (
    <main className=" rounded-md w-full">
      <Board />
    </main>
  );
}

export default page;
