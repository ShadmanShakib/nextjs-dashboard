"use client";
import React, { HTMLInputTypeAttribute } from "react";
import { Input } from "@/app/components/ui";
import { useForm } from "react-hook-form";
import useFormBuilder from "../useFormBuilder";
import { Button } from "@/app/components/ui/button";
import { map } from "lodash";
import { v4 as uuid } from "uuid";
import FieldType from "./field-type";
import { ChevronDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
type Props = {};

export default function FormControls({}: Props) {
  const { setFormTitle, form_fields, setFormFields } = useFormBuilder(
    (state) => state,
  );
  const [open, setOpen] = React.useState(false);
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
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger className="flex w-full flex-1 items-center bg-gray-100 px-2 py-1 text-start text-lg font-medium transition-all [&[data-state=open]>svg]:rotate-180">
          <p>Form Information</p>
          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200" />
        </CollapsibleTrigger>
        <CollapsibleContent className="  overflow-hidden p-2 text-sm transition-all">
          <div className="flex flex-col space-y-2">
            <label>Form Title</label>
            <Input
              onChange={(e) => setFormTitle(e.target.value)}
              type="text"
              placeholder="Input form title"
            />
          </div>
        </CollapsibleContent>
      </Collapsible>

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
