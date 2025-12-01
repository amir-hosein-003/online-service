"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { t } from "@/lib/dashboardPathObj"

const DashboardBreadcrumb = () => {
  const pathName = usePathname();
  const pathArray = pathName.split("/");
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">{t(pathArray[1])}</BreadcrumbLink>
        </BreadcrumbItem>
        {pathArray.length > 2 && (
          <>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>{t(pathArray[2])}</BreadcrumbPage>
          </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DashboardBreadcrumb;
