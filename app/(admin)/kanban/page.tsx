import React from "react";

import KanbanBoard from "./components/KanbanBoard";
type Props = {};

function page({}: Props) {
  return (
    <main className=" rounded-md w-full">
      <KanbanBoard />
    </main>
  );
}

export default page;
