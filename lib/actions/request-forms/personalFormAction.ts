"use server";

import {
  Personal,
  personalSchema,
} from "@/lib/validation/requestForms/personalSchema";
import { connectDB } from "@/lib/db/connectDB";
import categoryModel from "@/lib/db/models/categoryModel";

import { ActionData } from "../ActionData";

export async function savePersonalInformation(
  prevState: ActionData,
  formData: Personal
) {
  await connectDB();

  const result = personalSchema.safeParse(formData);
  if (!result.success) {
    return {
      message: "ERROR",
      errors: result.error.issues.map((error) => error.message),
    };
  }

  console.log(result.data);
  try {
    const newCategory = await categoryModel.create({
      name: "test",
      description: "test desc",
      isActive: true,
    });
    console.log(newCategory);
  } catch (error) {
    console.log(error);
  }

  return {
    message: "",
    errors: [],
  };
}
