"use client";
import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { HTMLInputTypeAttribute } from "react";
interface IFormBuilder {
  form_title: string;
  form_fields: {
    id: string;
    title: string;
    type: HTMLInputTypeAttribute;
  }[];
  setFormFields: (fields: any[]) => void;
  setFormTitle: (title: string) => void;
}
const useFormBuilder = create<IFormBuilder>()((set) => ({
  form_title: "Title",
  form_fields: [
    {
      id: uuid(),
      title: "Name",
      type: "text",
    },
  ],
  setFormFields: (fields: any[]) => set({ form_fields: fields }),
  setFormTitle: (title: string) => set({ form_title: title }),
}));

export default useFormBuilder;
