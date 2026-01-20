"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import SuccessMessage from "@/components/SuccessMessage";
import FormInput from "@/components/ui/FormInput";

const AccountSettings = () => {
  const form = useForm({
    // resolver: zodResolver(),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      bio: "",
      address: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    form.reset();
  };
  return (
    <section className="bg-base-200 rounded-lg p-6">
      <h3 className="text-2xl font-bold">اطلاعات شخصی</h3>
      <div className="divider" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8">
          <div className="flex flex-row gap-6">
            <div className="w-full space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <FormInput
                  control={form.control}
                  name="firstName"
                  label="نام"
                  placeholder="نام"
                />
                <FormInput
                  control={form.control}
                  name="lastName"
                  label="نام‌خانوادگی"
                  placeholder="نام‌خانوادگی"
                />
                <FormInput
                  control={form.control}
                  name="email"
                  label="ایمیل"
                  placeholder="example@gmail.com"
                />
                <FormInput
                  control={form.control}
                  name="phone"
                  label="شماره تماس"
                  placeholder="09123456789"
                />
              </div>
              <FormInput
                control={form.control}
                name="address"
                label="آدرس"
                placeholder="استان، شهر، خیابان، کوچه، پلاک، واحد..."
              />
              <FormInput
                control={form.control}
                name="bio"
                label="بیوگرافی"
                placeholder="بیوگرافی..."
              />
              {/* submit button */}
              <button
                type="submit"
                className="btn btn-primary btn-block rounded-lg"
              >
                ذخیره
              </button>

              {/* <div className="w-full flex flex-col items-center gap-2"> */}
              {/* error box style */}
              {/* <div className="w-full h-10 flex flex-row items-center text-error border-error border-1 rounded-lg bg-error/10 px-4">
                  <p className="text-sm font-normal">
                    متن تستی برای تست متن خطا و ارور
                  </p>
                </div> */}
              {/* success box style */}
              {/* <SuccessMessage
                  title="سربرگ تستی"
                  message="متن تستی برای تست متن موفق"
                /> */}
              {/* </div> */}
            </div>
            <div className="min-w-60 h-auto flex flex-col gap-6">
              <div className="h-full w-full rounded-lg bg-base-300"></div>
              <button className="btn btn-primary btn-soft btn-block">
                آپلود پروفایل
              </button>
            </div>
          </div>
          <SuccessMessage
            title="سربرگ تستی"
            message="متن تستی برای تست متن موفق"
            className="mt-6"
          />
        </form>
      </Form>
    </section>
  );
};

export default AccountSettings;
