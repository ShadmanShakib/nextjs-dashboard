import React from "react";
import { cn } from "@/app/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
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
];
type Props = {};

export default function FieldType({}: Props) {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("");
  return (
    <Popover>
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
                  setType(field.type);
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
