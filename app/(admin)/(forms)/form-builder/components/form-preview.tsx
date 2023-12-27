"use client";
import React from "react";
import useFormBuilder from "../useFormBuilder";
import { Button } from "@/app/components/ui/button";

type Props = {};

export default function FormPreview({}: Props) {
  const { form_title, form_fields } = useFormBuilder((state) => state);
  return (
    <div className="col-span-2 flex flex-col">
      <h1 className="text-xl">{form_title}</h1>
      <Button>Submit</Button>
    </div>
  );
}
