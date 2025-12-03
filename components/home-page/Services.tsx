import React from "react";
import Link from "next/link";

import Icon from "../ui/icon";

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
    <section className="container mx-auto bg-base-200 rounded-md p-16">
      <div className=""></div>
      <div className="flex flex-row items-end justify-center gap-2">
        <h3 className="text-3xl h-12 font-bold text-center bg-primary text-primary-content rounded-r-3xl rounded-t-3xl px-8 py-2">
          خدمات
        </h3>
        <div className="w-full h-0.5 bg-base-content/50" />
        <div className="">
          <Link
            href="/services"
            className="group btn btn-primary btn-lg w-42 rounded-l-3xl rounded-t-3xl"
          >
            کل خدمات
            <Icon
              icon="ph:arrow-left"
              className="group-hover:-translate-x-2 duration-300"
              width="20"
              height="20"
            />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-8 mt-16">
        {services.map((service: Service, index: number) => (
          <Link
            key={index}
            href={service.url}
            className="flex flex-col items-center justify-center gap-4 shadow bg-base-100 rounded-md p-6"
          >
            <Icon icon={service.icon} width="32" height="32" />
            <p className="">{service.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
