export type Income = {
  title: string;
  value: string;
  color: string;
  bgColor: string;
};

export const incomeList: Income[] = [
  {
    title: "درآمد روزانه",
    value: "3,345  تومان",
    color: "bg-[#1447e6]",
    bgColor: "bg-[#1447e6]/10",
  },
  {
    title: "درآمد ماهانه",
    value: "61,535  تومان",
    color: "bg-[#00bc7d]",
    bgColor: "bg-[#00bc7d]/10",
  },
  {
    title: "درآمد سالانه",
    value: "612,345  تومان",
    color: "bg-[#fe9a00]",
    bgColor: "bg-[#fe9a00]/10",
  },
  {
    title: "درآمد کل",
    value: "1,222,333  تومان",
    color: "bg-[#ad46ff]",
    bgColor: "bg-[#ad46ff]/10",
  },
  {
    title: "تعداد مشتریان امروز",
    value: "1,062  نفر",
    color: "bg-[#ff2056]",
    bgColor: "bg-[#ff2056]/10",
  },
];
