"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import FormInput from "@/components/ui/FormInput";
import SuccessMessage from "@/components/SuccessMessage";

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
    form.reset();
  };
  return (
    <section className="p-8">
      <h3 className="text-2xl font-bold">تغییر رمزعبور</h3>
      <div className="divider" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-8">
          <FormInput
            control={form.control}
            name="current"
            label="رمزعبور فعلی"
            isPassword
          />
          <FormInput
            control={form.control}
            name="new"
            label="رمزعبور جدید"
            isPassword
          />
          <FormInput
            control={form.control}
            name="confirm"
            label="تکرار رمزعبور"
            isPassword
          />

          <button
            type="submit"
            className="btn btn-primary btn-block rounded-lg"
          >
            تغییر رمزعبور
          </button>
          <SuccessMessage
            title="سربرگ تستی"
            message="متن تستی برای تست متن موفق"
          />
        </form>
      </Form>
    </section>
  );
};

export default ChangePassword;
