import z from "zod";

export const personalSchema = z.object({
  fullname: z.string().min(3, "نام باید حداقل ۳ کاراکتر باشد"),
  phone: z.string().regex(/^09\d{9}$/, "شماره تماس معتبر نیست"),
  nationalId: z.string().length(10, "کد ملی باید ۱۰ رقم باشد"),
  service: z.string().nonempty("انتخاب خدمت الزامی است"),
});

export type Personal = z.infer<typeof personalSchema>;
