"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { PlusIcon } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { t } from "@/lib/dashboardPathObj";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import AddServiceModal from "@/components/admin/services/AddServiceModal";

const DashboardHeader = () => {
  const pathName = usePathname();
  const pathArray = pathName.split("/");

  return (
    <header className="sticky top-6 bg-sidebar flex h-12 shrink-0 items-center justify-between gap-2 rounded-lg shadow px-4 my-6 mx-4">
      <div className="flex flex-row items-center gap-2">
        <SidebarTrigger className="-ml-1 cursor-pointer" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
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
      </div>
      <div className="flex flex-row items-center gap-2">
        {pathArray[2] === "services" && (
          <AddServiceModal>
            <PlusIcon size="25" />
          </AddServiceModal>
        )}
        <div className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center">
          a
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
