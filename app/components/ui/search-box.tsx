"use client";
import React from "react";
import { Input } from ".";
import { Search } from "lucide-react";
type Props = {};

function SearchBox({}: Props) {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="flex group border group-hover:border-blue-500 py-1 rounded-2xl px-3 items-center space-x-3">
      <Search className="h-5 w-5 text-gray-500" />
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Search..."
        className="focus:ring-0 focus:outline-none w-40"
      />
    </div>
  );
}

export default SearchBox;
