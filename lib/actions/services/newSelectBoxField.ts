"use server";

import { ActionData } from "@/lib/actionData";
import { connectDB } from "@/lib/db/connectDB";
import serviceModel from "@/lib/db/models/serviceModel";
import {
  NewSelectBoxFields,
  newSelectBoxSchema,
} from "@/lib/validations/services/newSelectBoxField";

interface FormFields extends NewSelectBoxFields {
  serviceId: string;
}

export async function newSelectBox(
  prevState: ActionData,
  formData: FormFields
) {
  await connectDB();

  const { serviceId, ...data } = formData;

  const result = newSelectBoxSchema.safeParse(data);
  if (!result.success) {
    return {
      message: "ERROR",
      errors: result.error.issues.map((issue) => issue.message),
    };
  }

  const foundService = await serviceModel.findOne({ _id: serviceId });
  if (!foundService) {
    return {
      message: "ERROR",
      errors: ["Service not found"],
    };
  }

  try {
    await serviceModel.findByIdAndUpdate(serviceId, {
      $push: {
        selectBox: result.data,
      },
    });

    return {
      message: "SUCCESS",
      errors: [],
    };
  } catch (error) {
    console.log(error);
    return {
      message: "ERROR",
      errors: ["Throw error in update service"],
    };
  }
}
