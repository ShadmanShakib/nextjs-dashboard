"use client";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import Card from "./Card";
import { data } from "./data";
type Props = {};
function reorder(list: any, startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}
function Board({}: Props) {
  const [orderedData, setOrderedData] = useState(data);

  const onDrugEnd = (result: any) => {
    const { destination, source, type } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (type === "card") {
      console.log("card");
      let newOrderedData = [...orderedData];
      // Source and destination list
      const sourceList = newOrderedData.find(
        (list) => list.id === source.droppableId,
      );
      const destList = newOrderedData.find(
        (list) => list.id === destination.droppableId,
      );
    }
  };
  return (
    <DragDropContext onDragEnd={onDrugEnd}>
      <Droppable droppableId="board" type="card">
        {(provided) => (
          <ol
            className="flex gap-x-3 h-full"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {data.map((item, index) => (
              <Card index={index} key={index} data={item} />
            ))}
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
