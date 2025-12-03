import { z } from "zod";

export const serviceSchema = z.object({
  name: z
    .string()
    .min(4, { message: "نام باید حداقل ۴ کاراکتر باشد." })
    .nonempty("وارد کردن نام الزامی است."),

  description: z
    .string()
    .min(5, { message: "توضیحات باید حداقل ۵ کاراکتر باشد." })
    .nonempty("وارد کردن توضیحات الزامی است."),

  price: z
    .string() // مقدار ورودی string را به number تبدیل می‌کند
    .min(4, { message: "قیمت باید حداقل ۱۰۰۰ تومان باشد." }),
});

export type ServiceFormFields = z.infer<typeof serviceSchema>;
