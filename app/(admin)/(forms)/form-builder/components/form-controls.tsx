"use client";
import React from "react";
import { Input } from "@/app/components/ui";
import { useForm } from "react-hook-form";
import useFormBuilder from "../useFormBuilder";
import { Button } from "@/app/components/ui/button";
import { map } from "lodash";
import { v4 as uuid } from "uuid";
type Props = {};

export default function FormControls({}: Props) {
  const { setFormTitle, form_fields, setFormFields } = useFormBuilder(
    (state) => state,
  );
  const handleSetFormFields = () => {
    setFormFields([
      ...form_fields,
      {
        id: uuid(),
      },
    ]);
  };
  return (
    <div className="columns-1">
      <div className="flex flex-col space-y-3">
        <label>Form Title</label>
        <Input
          onChange={(e) => setFormTitle(e.target.value)}
          type="text"
          placeholder="Input form title"
        />
      </div>
      {map(form_fields, (field, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <label>Field {index + 1}</label>
          <Input type="text" placeholder="Input form title" />
        </div>
      ))}
      <Button onClick={handleSetFormFields}>Add new input</Button>
    </div>
  );
}
