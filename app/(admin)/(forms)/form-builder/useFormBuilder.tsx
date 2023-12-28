"use client";
import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { HTMLInputTypeAttribute } from "react";
interface IFormBuilder {
  form_title: string;
  form_description: string;
  form_fields: {
    id: string;
    title: string;
    type: HTMLInputTypeAttribute;
  }[];
  setFormFields: (fields: any[]) => void;
  setFormTitle: (title: string) => void;
  setFormDescription: (description: string) => void;
}
const useFormBuilder = create<IFormBuilder>()((set) => ({
  form_title: "Title",
  form_description: "Describe about your form",
  form_fields: [
    {
      id: uuid(),
      title: "",
      type: "text",
    },
  ],
  setFormFields: (fields: any[]) => set({ form_fields: fields }),
  setFormTitle: (title: string) => set({ form_title: title }),
  setFormDescription: (description: string) =>
    set({ form_description: description }),
}));

export default useFormBuilder;
