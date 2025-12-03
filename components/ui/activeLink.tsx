"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const ActiveLink = ({ children, href, className }: Props) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`group flex flex-col items-center justify-between gap-2 w-18 ${pathName.startsWith(href) && "text-primary"} ${className}`}
    >
      {children}
      <span
        className={`h-[3px] w-0 group-hover:w-full bg-primary transition-all duration-300 ${pathName.startsWith(href) && "w-full"}`}
      />
    </Link>
  );
};

export default ActiveLink;
