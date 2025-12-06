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
import { CleaveInput } from "@/components/ui/CleaveInput";
import {
  NewSelectBoxFields,
  newSelectBoxSchema,
} from "@/lib/validations/services/newSelectBoxField";
import { newSelectBox } from "@/lib/actions/services/newSelectBoxField";

const initialState = {
  message: "",
  errors: [],
};

interface Props {
  children: React.ReactNode;
  serviceId: string;
}

const AddSelectBoxFields = ({ children, serviceId }: Props) => {
  const [state, formAction, isPending] = useActionState(
    newSelectBox,
    initialState
  );
  const form = useForm<NewSelectBoxFields>({
    resolver: zodResolver(newSelectBoxSchema),
    defaultValues: {
      option: "",
      value: "",
      price: "",
    },
  });

  const onSubmit = (data: NewSelectBoxFields) => {
    startTransition(() => {
      formAction({ ...data, serviceId });
    });
  };

  useEffect(() => {
    if (state.message === "SUCCESS") form.reset();
  }, [state, form]);

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer text-base-content/50 hover:text-base-content">
        {children}
      </DialogTrigger>
      <DialogClose className="text-left" />
      <DialogContent dir="rtl">
        <DialogHeader dir="rtl">
          <DialogTitle className="text-right">سلکت باکس جدید</DialogTitle>
          <DialogDescription className="text-right">
            برای افزودن سلکت باکس اقدام کنید
          </DialogDescription>
        </DialogHeader>
        <div className="divider my-0" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="option"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="absolute -top-4 right-3 bg-base-100 rounded-sm p-2">
                    آپشن
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="عنوان آپشن" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="absolute -top-4 right-3 bg-base-100 rounded-sm p-2">
                    مقدار
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="مقدار" {...field} />
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

            {/* <DialogClose asChild> */}
            <button
              type="submit"
              className="btn btn-primary btn-block rounded-lg mt-2"
              disabled={isPending}
            >
              {isPending && <div className="loading loading-spinner" />}
              افزودن
            </button>
            {/* </DialogClose> */}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddSelectBoxFields;
