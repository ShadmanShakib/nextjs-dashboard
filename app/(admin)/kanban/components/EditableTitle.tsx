import React, { useState } from "react";

type Props = {};

const EditableTitle = (props: Props) => {
  const [title, setTitle] = useState();
  const [isEditing, setIsEditing] = useState(false);
  return <div>{isEditing ? <input /> : <h1>{title}</h1>}</div>;
};

export default EditableTitle;
