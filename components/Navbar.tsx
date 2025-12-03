import React from "react";
import Image from "next/image";
import Link from "next/link";

import ActiveLink from "./ui/activeLink";

type Menu = {
  title: string;
  url: string;
};

const menuLinks: Menu[] = [
  { title: "خانه", url: "/" },
  { title: "خدمات", url: "/services" },
  { title: "درباره‌ما", url: "/about" },
  { title: "پشتیبانی", url: "/support" },
];

const Navbar = () => {
  return (
    <nav className="container mx-auto py-2">
      <div className="w-full grid grid-cols-3">
        <div className="flex flex-row items-center gap-6">
          {menuLinks.map((link: Menu, index: number) => (
            <ActiveLink key={index} href={link.url}>
              <p>{link.title}</p>
            </ActiveLink>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              className="w-24 h-24"
              alt="logo"
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button className="btn btn-primary">ورود</button>
          <button className="btn btn-primary btn-soft">ثبت نام</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
