import Link from "next/link";

import Icon from "../ui/icon";

type Comment = {
  userName: string;
  comment: string;
};
const comments: Comment[] = [
  { userName: "کاربر تست", comment: "خدمات عالی بود" },
  { userName: "کاربر تست", comment: "خدمات در کوتاه ترین زمان انجام شد" },
  { userName: "کاربر تست", comment: "از تیم تون خیلی ممنونم" },
  { userName: "کاربر تست", comment: "بی رقیب در خدمات آنلاین" },
  { userName: "کاربر تست", comment: "واقعا از خدماتتون ممنونم" },
];

const UserComments = () => {
  return (
    <section className="container mx-auto py-16">
      <h3 className="text-3xl font-bold text-center">نظرات کاربران</h3>
      <div className="grid grid-cols-5 gap-6 mt-16">
        {comments.map((comment: Comment, index: number) => (
          <div key={index} className="bg-base-200 rounded-md space-y-4 p-4">
            <div className="flex flex-row items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-base-300">
                <Icon icon="ph:user" width="24" height="24" />
              </div>
              <p className="font-bold">{comment.userName}</p>
            </div>
            <div className="">
              <p className="text-base-content/70">{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center gap-2 mt-16">
        <p className="">هنوز سفارش ندادی!؟</p>
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

export default UserComments;
