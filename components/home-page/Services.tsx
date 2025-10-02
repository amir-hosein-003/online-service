import React from "react";
import Icon from "../ui/icon";
import Link from "next/link";

type Service = {
  title: string;
  icon: string;
  url: string;
};

const services: Service[] = [
  { title: "پرداخت قبض", icon: "ph:coins", url: "/" },
  { title: "ثبت‌‌نام کتب درسی", icon: "ph:book-open-text", url: "/" },
  { title: "ثبت‌نام مدارس", icon: "ph:notebook", url: "/" },
  { title: "پرداخت مالیات", icon: "ph:hand-coins", url: "/" },
  { title: "انتخاب واحد", icon: "ph:note-pencil", url: "/" },
];

const Services = () => {
  return (
    <section className="container mx-auto py-16">
      <h3 className="text-3xl font-bold text-center">خدمات</h3>
      <div className="grid grid-cols-5 gap-8 mt-16">
        {services.map((service: Service, index: number) => (
          <Link
            key={index}
            href={service.url}
            className="flex flex-col items-center justify-center gap-4 shadow bg-base-200 p-6"
          >
            <Icon icon={service.icon} width="32" height="32" />
            <p className="">{service.title}</p>
          </Link>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center mt-16">
        <Link
          href="/services"
          className="group flex flex-row items-center font-bold"
        >
          کل خدمات
          <Icon
            icon="ph:arrow-left"
            className="group-hover:opacity-100 group-hover:-translate-x-2 duration-300 translate-x-2 opacity-0"
            width="20"
            height="20"
          />
        </Link>
      </div>
    </section>
  );
};

export default Services;
