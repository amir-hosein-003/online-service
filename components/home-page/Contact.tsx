"use client";

import { useForm } from "react-hook-form";

import Icon from "../ui/icon";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

type FormFeild = {
  username: string;
  email: string;
  message: string;
};

type Information = {
  icon: string;
  value: string;
};

const information: Information[] = [
  { icon: "ph:phone-fill", value: "021-55555555" },
  { icon: "ph:envelope-simple-fill", value: "example@gmail.com" },
  { icon: "ph:map-pin-fill", value: "تهران، خیابان آزادی" },
];

const Contact = () => {
  const { register, handleSubmit } = useForm<FormFeild>();

  const onSubmit = (data: FormFeild) => {
    console.log(data);
  };

  return (
    <section className="container mx-auto py-16">
      <div className="grid grid-cols-2 gap-6">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            {...register("username")}
            className="h-14"
            placeholder="نام"
          />
          <Input
            type="email"
            {...register("email")}
            className="h-14"
            placeholder="ایمیل"
          />
          <Textarea
            {...register("message")}
            placeholder="پیام..."
            className="min-h-28"
          />
          <button type="submit" className="btn btn-primary rounded-md">
            ارسال
          </button>
        </form>
        <div className="space-y-4 bg-base-200 rounded-md p-6">
          <h3 className="text-3xl font-bold">ارتباط با پشتیبانی</h3>
          <p className="text-base-content/70">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است،
          </p>
          {information.map((item: Information, index: number) => (
            <div key={index} className="flex flex-row items-center gap-4">
              <Icon icon={item.icon} width="24" height="24" />
              <p className="text-base-content/70">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
