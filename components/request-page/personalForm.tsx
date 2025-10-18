"use client";

import React, { startTransition, useActionState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { savePersonalInformation } from "@/lib/actions/request-forms/personalFormAction";
import {
  Personal,
  personalSchema,
} from "@/lib/validation/requestForms/personalSchema";

type Services = {
  title: string;
  value: string;
};

const services: Services[] = [
  { title: "ثبت‌نام کتاب درسی", value: "textbookRegistration" },
  { title: "پرداخت مالیات", value: "taxPayment" },
  { title: "پرداخت قبوض", value: "billPayment" },
  { title: "ثبت‌نام ایران‌خودرو", value: "carRegistration" },
  { title: "تمدید گواهینامه", value: "licenseRenewal" },
  { title: "استعلام خلافی خودرو", value: "fineInquiry" },
  { title: "ثبت سیم‌کارت", value: "simRegistration" },
  { title: "خرید بسته اینترنت", value: "internetPackage" },
  { title: "خرید شارژ", value: "mobileTopUp" },
  { title: "رهگیری مرسوله پستی", value: "postalTracking" },
];

interface Props {
  onNext: () => void;
}

const PersonalForm = ({ onNext }: Props) => {
  const [state, formAction, pending] = useActionState(savePersonalInformation, {
    message: "",
    errors: [],
  });

  const form = useForm<Personal>({
    resolver: zodResolver(personalSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      nationalId: "",
      service: "",
    },
  });

  const onSubmit = (data: Personal) => {
    startTransition(() => {
      formAction(data);
    });

    setTimeout(() => {
      onNext();
    }, 1000);
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    شماره تماس<span className="text-error">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="09124325689" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nationalId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    کد ملی<span className="text-error">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="1452485801" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    انتخاب خدمت<span className="text-error">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select
                      dir="rtl"
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full outline-0">
                        <SelectValue placeholder="خدمت" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service: Services, index: number) => (
                          <SelectItem key={index} value={service.value}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-row items-center justify-between">
              <button type="button" className="btn btn-primary rounded-sm">
                لغو
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

export default PersonalForm;
