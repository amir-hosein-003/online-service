import React from "react";
import Link from "next/link";

import Icon from "../ui/icon";

const benefits: string[] = [
  "قیمت ها مناسب",
  "پشتایبانی 7 روز هفته 24 ساعته",
  "سرعت در انجام کار",
  "امنیت بالا",
];

const Benefits = () => {
  return (
    <section className="container mx-auto py-16">
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <h3 className="text-3xl font-bold">چرا باید مارا انتخاب کنید!؟</h3>
          <ul className="mt-4">
            {benefits.map((benefit: string, index: number) => (
              <li key={index} className="flex flex-row items-center gap-2 mb-2">
                <div className="w-1 h-1 rounded-full bg-base-content" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-base-300 h-full flex items-center justify-center">
          Image
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-2 mt-16">
        <p className="">کارا تو به ما بسپار.</p>
        <Link
          href="/services"
          className="group flex flex-row items-center font-bold"
        >
          ثبت سفارش
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

export default Benefits;
