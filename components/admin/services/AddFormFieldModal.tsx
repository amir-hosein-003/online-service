"use client";

import React, { startTransition, useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const initialState = {
  message: "",
  errors: [],
};

interface Props {
  children: React.ReactNode;
  serviceId: string;
}

const AddFormFieldModal = ({ children, serviceId }: Props) => {
  // const [state, formAction, isPending] = useActionState(
  //   newService,
  //   initialState
  // );

  const form = useForm({
    // resolver: zodResolver(),
    defaultValues: {
      title: "",
      placeholder: "",
    },
  });
  const onSubmit = (data: any) => {
    startTransition(() => {
      // formAction({data, serviceId});
    });
  };
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer text-base-content/50 hover:text-base-content">
        {children}
      </DialogTrigger>
      <DialogClose className="text-left" />
      <DialogContent dir="rtl">
        <DialogHeader dir="rtl">
          <DialogTitle className="text-right">فیلد جدید</DialogTitle>
          <DialogDescription className="text-right">
            برای افزودن فیلد اقدام کنید
          </DialogDescription>
        </DialogHeader>
        <div className="divider my-0" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="absolute -top-4 right-3 bg-base-100 rounded-sm p-2">
                    نام سرویس
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="عنوان فیلد" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="placeholder"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="absolute -top-4 right-3 bg-base-100 rounded-sm p-2">
                    متن نشانگر
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="متن نشانگر" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <DialogClose asChild> */}
            <button
              type="submit"
              className="btn btn-primary btn-block rounded-lg mt-2"
              // disabled={isPending}
            >
              {/* {isPending && <div className="loading loading-spinner" />} */}
              افزودن
            </button>
            {/* </DialogClose> */}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddFormFieldModal;
