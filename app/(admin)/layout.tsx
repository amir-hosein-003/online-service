import React from "react";

import AppSidebar from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardBreadcrumb from "@/components/admin/DashboardBreadcrumb";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "17rem",
        } as React.CSSProperties
      }
      dir="rtl"
    >
      <AppSidebar />
      <SidebarInset className="mr-4">
        <header className="sticky top-6 bg-sidebar flex h-12 shrink-0 items-center gap-2 rounded-lg shadow px-4 my-6 mx-4">
          <SidebarTrigger className="-ml-1 cursor-pointer" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <DashboardBreadcrumb />
        </header>
        <ScrollArea
          dir="rtl"
          className="max-h-[calc(100vh-120px)] flex flex-1 flex-col gap-4 p-4 bg-sidebar mx-4 mb-6 rounded-lg shadow"
        >
          {children}
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default layout;
