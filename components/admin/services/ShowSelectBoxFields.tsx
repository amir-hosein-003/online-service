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

interface Props {
  children: React.ReactNode;
}

const ShowSelectBoxFields = ({ children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer text-base-content/50 hover:text-base-content">
        {children}
      </DialogTrigger>
      <DialogClose className="text-left" />
      <DialogContent dir="rtl">
        <DialogHeader dir="rtl">
          <DialogTitle className="text-right">سلکت باکس ها</DialogTitle>
        </DialogHeader>
        <div className="divider my-0" />
        <div className="space-y-6">
          <div className="flex flex-row items-center justify-center w-full min-h-32">
            <p className="text-base-content/60">هنوز سلکت باکسی به این سرویس اضافه نشده است</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShowSelectBoxFields;
