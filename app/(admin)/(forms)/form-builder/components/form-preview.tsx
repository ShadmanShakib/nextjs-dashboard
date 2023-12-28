"use client";
import React from "react";
import { map } from "lodash";

import useFormBuilder from "../useFormBuilder";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui";

type Props = {};

export default function FormPreview({}: Props) {
  const { form_title, form_fields, form_description } = useFormBuilder(
    (state) => state,
  );
  return (
    <div className="col-span-2 flex flex-col space-y-4 px-3 pt-20">
      <div className="">
        <h1 className="text-3xl">{form_title ? form_title : "Form Title"}</h1>
        <p>{form_description ? form_description : "Describe your form"}</p>
      </div>
      {map(form_fields, (field) => {
        return (
          <div key={field.id} className="flex flex-col space-y-2">
            <label htmlFor={field.title}>
              {field.title ? field.title : "Field name"}
            </label>
            <Input type={field.type} name={field.title} />
          </div>
        );
      })}
      <Button>Submit</Button>
    </div>
  );
}
