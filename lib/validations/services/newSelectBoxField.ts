import { z } from "zod";

export const newSelectBoxSchema = z.object({
  option: z
    .string()
    .min(4, "آپشن باید حداقل 4 کاراکتر داشته باشد")
    .nonempty("وارد کردن آپشن الزامی است"),
  value: z
    .string()
    .min(4, "مفدار باید حداقل 4 کاراکتر داشته باشد")
    .nonempty("وارد کردن مفدار الزامی است"),
  price: z
    .string()
    .min(4, "قیمت باید حداقل 1000 تومان باشد")
    .nonempty("وارد کردن قیمت الزامی است"),
});

export type NewSelectBoxFields = z.infer<typeof newSelectBoxSchema>;
