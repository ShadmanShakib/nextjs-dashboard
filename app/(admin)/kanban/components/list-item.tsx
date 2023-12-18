"use client";
import React from "react";
import { ElementRef, useRef, useState } from "react";
import ListHeader from "./list-header";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import Card from "./Card";
type Props = {
  data: any;
  index: number;
};

function Listitem({ data, index }: Props) {
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="shrink-0 h-full w-[272px] bg-gray-200 p-2 select-none"
        >
          <div
            {...provided.dragHandleProps}
            className="w-full rounded-md bg-[#f1f2f4] shadow-md pb-2"
          >
            <ListHeader title={data.title} />
            <Droppable droppableId={data.id} type="task">
              {(provided) => (
                <ol
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="h-full overflow-y-auto space-y-4"
                >
                  {data.tasks.map((item: any, index: number) => (
                    <Card index={index} key={item.id} data={item} />
                  ))}
                  {provided.placeholder}
                </ol>
              )}
            </Droppable>
          </div>
        </li>
      )}
    </Draggable>
  );
}

export default Listitem;
