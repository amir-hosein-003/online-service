"use client";

import React, { startTransition, useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Cleave from "cleave.js/react";
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
import { Textarea } from "@/components/ui/textarea";
import {
  ServiceFormFields,
  serviceSchema,
} from "@/lib/validations/addServiceSchema";
import { newService } from "@/lib/actions/services/newService";
import { cn } from "@/lib/utils";
import { CleaveInput } from "@/components/ui/CleaveInput";

interface CleaveInputElement extends HTMLInputElement {
  rawValue: string;
}

const initialState = {
  message: "",
  errors: [],
};

interface Props {
  children: React.ReactNode;
}

const AddServiceModal = ({ children }: Props) => {
  const [state, formAction, isPending] = useActionState(
    newService,
    initialState
  );

  const form = useForm<ServiceFormFields>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      name: "",
      price: "",
      description: "",
    },
  });

  const onSubmit = (data: ServiceFormFields) => {
    startTransition(() => {
      formAction(data);
    });
  };

  useEffect(() => {
    if (state.message === "SUCCESS") form.reset();
  }, [state]);

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer text-base-content/50 hover:text-base-content">
        {children}
      </DialogTrigger>
      <DialogClose className="text-left" />
      <DialogContent dir="rtl">
        <DialogHeader dir="rtl">
          <DialogTitle className="text-right">سرویس جدید</DialogTitle>
          <DialogDescription className="text-right">
            افزودن سرویس جدید با چند کلیک، سریع و آسان برای مدیریت کارها.
          </DialogDescription>
        </DialogHeader>
        <div className="divider my-0" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="absolute -top-4 right-3 bg-base-100 rounded-sm p-2">
                    نام سرویس
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="نام سرویس" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="absolute -top-4 right-3 bg-base-100 rounded-sm p-2">
                    قیمت
                  </FormLabel>
                  <FormControl>
                    <CleaveInput
                      placeholder="قیمت"
                      value={field.value}
                      onChange={(v) => field.onChange(v)}
                      options={{
                        numeral: true,
                        numeralThousandsGroupStyle: "thousand", // 1,000,000
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="absolute -top-4 right-3 bg-base-100 rounded-sm p-2">
                    توضیحات
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="توضیحات"
                      className="min-h-24"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              className="btn btn-primary btn-block rounded-lg mt-2"
              disabled={isPending}
            >
              {isPending && <div className="loading loading-spinner" />}
              افزودن
            </button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddServiceModal;
