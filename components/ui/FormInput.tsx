"use client";

import React from "react";
import { Control } from "react-hook-form";

import { cn } from "@/lib/utils";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";

interface Props {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  inputStyle?: string;
  labelStyle?: string;
  isPassword?: boolean;
}

const FormInput = ({
  control,
  name,
  label,
  placeholder,
  inputStyle,
  labelStyle,
  isPassword,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative">
          <FormLabel
            className={cn(
              "absolute -top-4 right-3 bg-base-100 rounded-sm p-2",
              labelStyle
            )}
          >
            {label}
          </FormLabel>
          <FormControl>
            {isPassword ? (
              <Input
                className={cn("bg-base-100", inputStyle)}
                placeholder={placeholder}
                type="password"
                {...field}
              />
            ) : (
              <Input
                className={cn("bg-base-100", inputStyle)}
                placeholder={placeholder}
                {...field}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
