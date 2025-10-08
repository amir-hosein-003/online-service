import Link from "next/link";

import Icon from "./ui/icon";

type Social = {
  icon: string;
  url: string;
};

type Link = {
  title: string;
  url: string;
};

const socials: Social[] = [
  { icon: "ph:telegram-logo", url: "/" },
  { icon: "ph:linkedin-logo", url: "/" },
  { icon: "ph:whatsapp-logo", url: "/" },
];

const links: Link[] = [
  { title: "صفحه اصلی", url: "/" },
  { title: "درباره‌ی ما", url: "/" },
  { title: "خدمات", url: "/" },
  { title: "پشتیبانی", url: "/" },
];

const Footer = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#0c456b"
          fillOpacity="1"
          d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,202.7C840,203,960,149,1080,133.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <section className="relative w-full bg-[#0c456b]">
        <div className="container mx-auto grid grid-cols-3 justify-items-center gap-6 py-16">
          <div className="space-y-4 text-base-300">
            <p className="font-bold">راه های ارتباطی</p>
            <ul>
              <li>آدرس</li>
              <li>تلگرام</li>
              <li>ساعت کاری</li>
            </ul>
            <div className="flex flex-row items-center gap-4">
              {socials.map((social: Social, index: number) => (
                <Link
                  key={index}
                  href={social.url}
                  className="flex items-center justify-center rounded-md bg-base-200 text-base-content p-2"
                >
                  <Icon icon={social.icon} width="24" height="24" />
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4 text-base-300">
            <p className="font-bold">لینک ها</p>
            <div className="flex flex-col">
              {links.map((link: Link, index: number) => (
                <Link key={index} href="/services">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4 text-base-300">
            <p className="font-bold">بیشتر</p>
            <div className="flex flex-col">
              <Link href="/">سوالات متداول</Link>
              <Link href="/">قوانین سایت</Link>
              <Link href="/">حریم خصوصی</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 border-t py-4">
          <p className="text-base-300">
            تمامی حقوق این سایت متعلق به سرویس خدمات اینترنتی بوده و محفوظ است.
          </p>
          <p className="text-base-300">{new Date().getFullYear()}</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
