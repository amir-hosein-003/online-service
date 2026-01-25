"use client";

import React from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const data = [
  { name: "فروردین", uv: 4000 },
  { name: "اردیبهشت", uv: 3000 },
  { name: "خرداد", uv: 2000 },
  { name: "تیر", uv: 2780 },
  { name: "مرداد", uv: 1890 },
  { name: "شهریور", uv: 2390 },
  { name: "مهر", uv: 5490 },
  { name: "آبان", uv: 3490 },
  { name: "آذر", uv: 4490 },
  { name: "دی", uv: 4490 },
  { name: "بهمن", uv: 6490 },
  { name: "اسفند", uv: 4490 },
];

const EarningReview = () => {
  return (
    <div className="h-full w-full" dir="rtl">
      <div className="flex flex-row items-center justify-between border-b p-4">
        <h3 className="text-sm font-bold">درآمد سالانه</h3>
        <Select>
          <SelectTrigger className="border-0 bg-base-100">
            <SelectValue placeholder="فروردین" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-month">فروردین</SelectItem>
            <SelectItem value="last-month">اردیبهشت</SelectItem>
            <SelectItem value="last-month">خرداد</SelectItem>
            <SelectItem value="last-month">تیر</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ResponsiveContainer width="100%" height={288}>
        <AreaChart data={data} margin={{ left: 20, right: 20 }}>
          <XAxis dataKey="name" tickLine={true} axisLine={true} fontSize={12} />
          <Tooltip
            itemStyle={{
              color: "black",
            }}
            labelStyle={{
              fontWeight: "bold",
              color: "#564FFD",
            }}
            contentStyle={{
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#564FFD"
            strokeWidth={2}
            fill="#EBEBFF"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningReview;
