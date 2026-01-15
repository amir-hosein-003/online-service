"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import SuccessMessage from "@/components/SuccessMessage";

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
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="absolute -top-4 right-3 bg-base-100 rounded-sm p-2">
                        نام
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-base-100"
                          placeholder="نام"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="absolute -top-4 right-3 bg-base-100 rounded-sm p-2">
                        نام‌خانوادگی
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-base-100"
                          placeholder="نام‌خانوادگی"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="absolute -top-4 right-3 bg-base-100 rounded-sm p-2">
                        ایمیل
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-base-100"
                          placeholder="example@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel className="absolute -top-4 right-3 bg-base-100 rounded-sm p-2">
                        شماره تماس
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="bg-base-100"
                          placeholder="09123456789"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="absolute -top-4 right-3 bg-base-100 rounded-sm p-2">
                      آدرس
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-base-100"
                        placeholder="استان، شهر، خیابان، کوچه، پلاک، واحد..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="absolute -top-4 right-3 bg-base-100 rounded-sm p-2">
                      بیوگرافی
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-base-100"
                        placeholder="بیوگرافی..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
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
