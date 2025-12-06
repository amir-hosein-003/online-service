"use client";

import React from "react";
import Cleave from "cleave.js/react";

import { cn } from "@/lib/utils";
import { CleaveOptions } from "cleave.js/options";

interface CleaveInputElement extends HTMLInputElement {
  rawValue: string;
}

interface CleaveInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  options: CleaveOptions;
  onChange?: (value: string) => void;
}

export function CleaveInput({
  className,
  options,
  onChange,
  ...props
}: CleaveInputProps) {
  return (
    <Cleave
      {...props}
      options={options}
      onChange={(e: React.ChangeEvent<CleaveInputElement>) =>
        onChange?.(e.target.rawValue)
      }
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-12 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-2 focus-visible:border-primary",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
    />
  );
}
