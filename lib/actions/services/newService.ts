"use server";

import { revalidatePath } from "next/cache";

import { ActionData } from "@/lib/actionData";
import { connectDB } from "@/lib/db/connectDB";
import serviceModel from "@/lib/db/models/serviceModel";
import {
  ServiceFormFields,
  serviceSchema,
} from "@/lib/validations/services/addServiceSchema";

export async function newService(
  prevState: ActionData,
  formData: ServiceFormFields
): Promise<ActionData> {
  await connectDB();

  const result = serviceSchema.safeParse(formData);
  if (!result.success) {
    return {
      message: "ERROR",
      errors: result.error.issues.map((issue) => issue.message),
    };
  }

  const exists = await serviceModel.findOne({ name: result.data.name });
  if (exists) {
    return {
      message: "ERROR",
      errors: ["سرویسی با این نام قبلاً ثبت شده است."],
    };
  }

  try {
    await serviceModel.create({
      name: result.data.name,
      description: result.data.description,
      price: result.data.price,
    });

    revalidatePath("/admin/services");

    return {
      message: "SUCCESS",
      errors: [],
    };
  } catch (error) {
    console.log(error);
    return {
      message: "ERROR",
      errors: ["ثبت سرویس جدید با خطا مواجه شد. لطفاً دوباره تلاش کنید."],
    };
  }
}
