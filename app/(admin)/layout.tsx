"use client";

import React from "react";
import { usePathname } from "next/navigation";

import AppSidebar from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardHeader from "@/components/admin/DashboardHeader";
import TrashBox from "@/components/admin/services/TrashBox";
import { useServices } from "@/context/ServicesContext";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  const pathname = usePathname();
  const { ids } = useServices();

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "17rem",
        } as React.CSSProperties
      }
      dir="rtl"
    >
      {/* dashboard sidebar */}
      <AppSidebar />
      <SidebarInset className="mr-4">
        {/* dashboard header */}
        <DashboardHeader />

        {ids && pathname.includes("services") ? <TrashBox /> : null}

        {/* dashboard content */}
        <ScrollArea
          dir="rtl"
          className={`max-h-[calc(100vh-120px)] flex flex-1 flex-col gap-4 mx-4 mb-6 rounded-lg ${pathname.includes("services") && "shadow"}`}
        >
          {children}
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default layout;
