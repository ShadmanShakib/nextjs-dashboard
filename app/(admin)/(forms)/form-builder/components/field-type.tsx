import React, { HTMLInputTypeAttribute } from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Command,
  CommandGroup,
  CommandItem,
} from "@/app/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";

const FieldTypes = [
  {
    id: 1,
    label: "Text",
    type: "text",
  },
  {
    id: 2,
    label: "Number",
    type: "number",
  },
  {
    id: 3,
    label: "Password",
    type: "password",
  },
  {
    id: 4,
    label: "Email",
    type: "email",
  },
];
type Props = {
  type: HTMLInputTypeAttribute;
  handleSetType: (type: HTMLInputTypeAttribute) => void;
};

export default function FieldType({ type, handleSetType }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="justify-between"
          role="field-type"
          aria-expanded={open}
        >
          {type
            ? FieldTypes.find((field) => field.type === type)?.label
            : "Select input type"}
          <ChevronsUpDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px]">
        <Command>
          <CommandGroup>
            {FieldTypes.map((field) => (
              <CommandItem
                key={field.id}
                onSelect={() => {
                  handleSetType(field.type);
                  setOpen(false);
                }}
              >
                {field.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
