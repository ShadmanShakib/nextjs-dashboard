import React, { useState } from "react";
import { Button, Title } from "@tremor/react";
import { useForm } from "react-hook-form";

type Props = {
  title?: string;
};

function SortableList({}: Props) {
  const [title, setTitle] = useState("Recently assigned");
  const [isEditing, setEditing] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    setTitle(data.title);
    setEditing(false);
  };

  return (
    <div className="flex  flex-col bg-gray-100 h-full w-full p-4 ">
      <div className="flex">
        <Button variant="light">
          <Title>{title}</Title>
        </Button>
        <p>+</p>
      </div>
      <Button> + Add tasks</Button>
    </div>
  );
}

export default SortableList;
