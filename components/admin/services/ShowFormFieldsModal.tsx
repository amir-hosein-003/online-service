"use client";

import React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ServiceFormFields } from "@/lib/db/models/serviceModel";

interface Props {
  children: React.ReactNode;
  formFields: ServiceFormFields[];
}

const ShowFormFieldModal = ({ children, formFields }: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer text-base-content/50 hover:text-base-content">
        {children}
      </DialogTrigger>
      <DialogClose className="text-left" />
      <DialogContent dir="rtl">
        <DialogHeader dir="rtl">
          <DialogTitle className="text-right">فیلدها</DialogTitle>
        </DialogHeader>
        <div className="divider my-0" />
        <div className="space-y-6">
          {formFields.length > 0 ? (
            formFields.map((field: ServiceFormFields, index: number) => (
              <div key={index} className="relative">
                <label className="text-xs absolute -top-4 right-3 bg-base-100 rounded-sm p-2">
                  {field.title}
                </label>
                <Input placeholder={field.placeholder} />
              </div>
            ))
          ) : (
            <div className="flex flex-row items-center justify-center w-full min-h-32">
              <p className="text-base-content/60">
                هنوز فیلدی به این سرویس اضافه نشده است
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShowFormFieldModal;
