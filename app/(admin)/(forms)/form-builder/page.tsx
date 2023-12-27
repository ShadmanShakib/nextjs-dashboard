import React from "react";
import FormControls from "./components/form-controls";
import FormPreview from "./components/form-preview";
type Props = {};

export default function FormBuilder({}: Props) {
  return (
    <div className="grid grid-cols-3">
      <FormControls />
      <FormPreview />
    </div>
  );
}
