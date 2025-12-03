"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Settings,
  Users,
  LayoutDashboard,
  Server,
  GalleryVerticalEnd,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "داشبورد", url: "/admin", icon: LayoutDashboard },
  { title: "خدمات", url: "/admin/services", icon: Server },
  { title: "کاربران", url: "/admin/users", icon: Users },
  { title: "تنظیمات", url: "/admin/settings", icon: Settings },
];

const AppSidebar = ({ ...props }) => {
  const pathName = usePathname();
  return (
    <Sidebar
      variant="floating"
      collapsible="icon"
      className="m-4 h-auto"
      {...props}
      dir="rtl"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold text-lg">خدمات اینترنتی</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu className="gap-2 mt-4">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                className="h-fit group-data-[collapsible=icon]:p-0"
              >
                <Link
                  href={item.url}
                  className={`flex items-center p-2 gap-3 ${pathName === item.url && "bg-muted"}`}
                >
                  <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                    <item.icon className="size-5" />
                  </div>
                  <span className="text-lg">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="#">
                <div className="bg-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-full">
                  a
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium text-lg">امیرحسین کنعانی</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="#">
                <div className="bg-destructive text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                  <LogOut className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium text-lg">خروج</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
