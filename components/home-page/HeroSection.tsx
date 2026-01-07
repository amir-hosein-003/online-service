import Image from "next/image";

import RadialGlow from "../RadialGlow";

const HeroSection = () => {
  return (
    <section className="container mx-auto h-126 py-16 relative">
      <RadialGlow className="left-8 top-5" />
      <div className="h-full grid grid-cols-2">
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-4xl font-bold">
            سیستم خدمات اینترنتی کاملا آنلاین
          </h1>
          <p className="text-base-content/70">
            دیگه نیاز نیست فاصله بین منزل تا کافی نت رو طی کنی و تو ترافیک خسته
            بشی
            <br />
            این دفعه کافی نت میاد خونه ات!😎
          </p>
          <div className="flex flex-row items-center gap-4">
            <button className="btn btn-primary">ثبت سفارش</button>
            <button className="btn btn-primary btn-soft">پشتیبانی</button>
          </div>
        </div>
        <Image
          src="/images/hero.png"
          draggable={false}
          alt="hero"
          width={600}
          height={400}
        />
      </div>
    </section>
  );
};

export default HeroSection;
