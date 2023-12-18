"use client";

import { Draggable } from "@hello-pangea/dnd";

type Props = {
  data: {
    id: string;
    title: string;
  };
  index: number;
};

function Card({ data, index }: Props) {
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role="button"
          className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm"
        >
          {data.title}
        </div>
      )}
    </Draggable>
  );
}

export default Card;
