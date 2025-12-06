"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { serviceStatusHandler } from "@/lib/actions/services/serviceStatusHandler";

interface Props {
  isActive: boolean;
  serviceId: string;
}

const ServiceActivatorBtn = ({ isActive, serviceId }: Props) => {
  const [message, setMessage] = useState<string>("");

  const statusHandler = async () => {
    const result = await serviceStatusHandler(serviceId);
    setMessage(result.message);
  };

  useEffect(() => {
    if (message === "SUCCESS") {
      toast.success("وضعیت با موفقیت تغییر کرد");
    } else if (message === "ERROR") {
      toast.success(
        "مشکلی در تغییر وضعیت پیش آمد، چند دقیقه بعد دوباره تلاش کنید."
      );
    }
  }, [message]);
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button onClick={statusHandler} className="cursor-pointer">
          {isActive ? "فعال" : "غیرفعال"}
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        {`برای ${isActive ? "غیرفعال" : "فعال"} کردن سرویس کلیک کنید`}
      </TooltipContent>
    </Tooltip>
  );
};

export default ServiceActivatorBtn;
