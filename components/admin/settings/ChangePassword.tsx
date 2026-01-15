"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ChangePassword = () => {
  const form = useForm({
    defaultValues: {
      current: "",
      new: "",
      confirm: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <section className="p-8">
      <h3 className="text-2xl font-bold">تغییر رمزعبور</h3>
      <div className="divider" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-8">
          <FormField
            control={form.control}
            name="current"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute -top-4 right-3 bg-base-100 rounded-sm p-2">
                  رمزعبور فعلی
                </FormLabel>
                <FormControl>
                  <Input type="password" className="bg-base-100" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="new"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute -top-4 right-3 bg-base-100 rounded-sm p-2">
                  رمزعبور جدید
                </FormLabel>
                <FormControl>
                  <Input type="password" className="bg-base-100" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute -top-4 right-3 bg-base-100 rounded-sm p-2">
                  تکرار رمزعبور
                </FormLabel>
                <FormControl>
                  <Input type="password" className="bg-base-100" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            className="btn btn-primary btn-block rounded-lg mt-2"
          >
            تغییر رمزعبور
          </button>
        </form>
      </Form>
    </section>
  );
};

export default ChangePassword;
