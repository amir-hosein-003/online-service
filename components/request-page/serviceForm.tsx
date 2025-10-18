"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

const ServiceForm = ({ onNext, onBack }: Props) => {
  const form = useForm({
    defaultValues: {
      fullname: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    onNext();
  };
  return (
    <section className="w-full h-full flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold">اطلاعات شخصی</h3>
        <p className="text-base-content/70 text-sm">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.
        </p>
      </div>
      <div className="mt-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 border rounded-md p-4"
          >
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    نام و نام‌خانوادگی<span className="text-error">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="نام و نام‌خانوادگی" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    نام و نام‌خانوادگی<span className="text-error">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="نام و نام‌خانوادگی" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    نام و نام‌خانوادگی<span className="text-error">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="نام و نام‌خانوادگی" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-row items-center justify-between">
              <button
                type="button"
                onClick={onBack}
                className="btn btn-primary rounded-sm"
              >
                قبلی
              </button>
              <button type="submit" className="btn btn-primary rounded-sm">
                ثبت
              </button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ServiceForm;
