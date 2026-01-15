import React from "react";
import { twJoin } from "tailwind-merge";

interface Props {
  title?: string;
  message: string;
  className?: string;
}

const SuccessMessage = ({ title, message, className }: Props) => {
  return (
    <div
      className={twJoin(
        "w-full h-10 flex flex-row items-center text-success border-success border-1 rounded-lg bg-success/10 px-4",
        className
      )}
    >
      <p className="text-sm font-semibold">
        {title}
        {":  "}
      </p>
      <p className="text-sm font-normal">{message}</p>
    </div>
  );
};

export default SuccessMessage;
