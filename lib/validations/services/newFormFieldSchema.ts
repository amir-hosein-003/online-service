import { z } from "zod";

export const newFormFieldSchema = z.object({
  title: z
    .string()
    .min(4, "نام باید حداقل 4 کاراکتر داشته باشد")
    .nonempty("وارد کردن نام الزامی است"),

  placeholder: z
    .string()
    .min(4, "متن نشانگر باید حداقل 4 کاراکتر داشته باشد")
    .nonempty("وارد کردن متن نشانگر الزامی است"),
});

export type NewFormField = z.infer<typeof newFormFieldSchema>;
