"use client";
import React, { HTMLInputTypeAttribute } from "react";
import { Input } from "@/app/components/ui";
import { useForm } from "react-hook-form";
import useFormBuilder from "../useFormBuilder";
import { Button } from "@/app/components/ui/button";
import { map } from "lodash";
import { v4 as uuid } from "uuid";
import FieldType from "./field-type";
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
        title: "New Field",
        type: "text",
      },
    ]);
  };
  const handleEditFieldTitle = (id: string, title: string) => {
    const new_fields = form_fields.map((field) => {
      if (field.id === id) {
        return { ...field, title };
      }
      return field;
    });
    setFormFields(new_fields);
  };
  const handleEditFieldType = (id: string, type: HTMLInputTypeAttribute) => {
    const new_fields = form_fields.map((field) => {
      if (field.id === id) {
        return { ...field, type };
      }
      return field;
    });
    setFormFields(new_fields);
  };
  return (
    <div className="flex flex-col  space-y-4  p-2">
      <div className="flex flex-col space-y-2">
        <label>Form Title</label>
        <Input
          onChange={(e) => setFormTitle(e.target.value)}
          type="text"
          placeholder="Input form title"
        />
      </div>
      {map(form_fields, (field, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <label>{field.title ? field.title : "Field name"}</label>
          <Input
            onChange={(e) => handleEditFieldTitle(field.id, e.target.value)}
            type="text"
            placeholder="Enter field name"
          />
          <FieldType
            handleSetType={(type: HTMLInputTypeAttribute) =>
              handleEditFieldType(field.id, type)
            }
            type={field.type}
          />
        </div>
      ))}
      <Button className="mt-4" onClick={handleSetFormFields}>
        Add new field
      </Button>
    </div>
  );
}
