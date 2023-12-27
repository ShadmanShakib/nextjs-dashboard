"use client";
import React from "react";
import useFormBuilder from "../useFormBuilder";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui";
import { map } from "lodash";

type Props = {};

export default function FormPreview({}: Props) {
  const { form_title, form_fields } = useFormBuilder((state) => state);
  return (
    <div className="col-span-2 flex flex-col">
      <h1 className="text-xl">{form_title}</h1>
      {map(form_fields, (field) => {
        return (
          <div key={field.id} className="">
            <label htmlFor={field.title}>{field.title}</label>
            <Input name={field.title} />
          </div>
        );
      })}
      <Button>Submit</Button>
    </div>
  );
}
