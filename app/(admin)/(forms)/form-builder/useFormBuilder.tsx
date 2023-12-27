"use client";
import { create } from "zustand";
interface IFormBuilder {
  form_title: string;
  form_fields: any[];
  setFormFields: (fields: any[]) => void;
  setFormTitle: (title: string) => void;
}
const useFormBuilder = create<IFormBuilder>()((set) => ({
  form_title: "Title",
  form_fields: [],
  setFormFields: (fields: any[]) => set({ form_fields: fields }),
  setFormTitle: (title: string) => set({ form_title: title }),
}));

export default useFormBuilder;
