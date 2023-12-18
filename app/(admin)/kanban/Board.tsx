"use client";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import * as _ from "lodash";
import { listData } from "./data";
import Listitem from "./components/list-item";
type Props = {};
function reorder(list: any, startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}
function Board({}: Props) {
  const [orderedData, setOrderedData] = useState(listData);

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
    if (type === "list") {
      const items = reorder(orderedData, source.index, destination.index).map(
        (item: any, index) => ({ ...item, order: index }),
      );
      setOrderedData(items);
    }
    if (type === "task") {
      let newOrderedData = [...orderedData];

      // Source and destination list
      let sourceList = newOrderedData.find(
        (list) => list.id === source.droppableId,
      );
      let destList = newOrderedData.find(
        (list) => list.id === destination.droppableId,
      );

      if (!sourceList || !destList) {
        return;
      }
      // Check if cards exists on the sourceList
      if (!sourceList.tasks) {
        sourceList.tasks = [];
      }

      // Check if cards exists on the destList
      if (!destList.tasks) {
        destList.tasks = [];
      }
      // Moving the card in the same list
      if (source.droppableId === destination.droppableId) {
        const reorderedTasks: any = reorder(
          sourceList.tasks,
          source.index,
          destination.index,
        );

        sourceList.tasks = reorderedTasks;

        setOrderedData(newOrderedData);
      } else {
        const [movedtask] = sourceList.tasks.splice(source.index, 1);
        // Assign the new listId to the moved card
        movedtask.id = destination.droppableId;
        // Add card to the destination list
        destList.tasks.splice(destination.index, 0, movedtask);
        setOrderedData(newOrderedData);
      }
    }
  };
  return (
    <>
      <DragDropContext onDragEnd={onDrugEnd}>
        <Droppable droppableId="lists" type="list" direction="horizontal">
          {(provided) => (
            <ol
              className="flex gap-x-3 h-full"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {_.map(orderedData, (item, index) => {
                return <Listitem key={item.id} index={index} data={item} />;
              })}
              {provided.placeholder}
              <div className="flex-shrink-0 w-1" />
            </ol>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default Board;
