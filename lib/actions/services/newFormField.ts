"use server";

import { ActionData } from "@/lib/actionData";
import { connectDB } from "@/lib/db/connectDB";
import serviceModel from "@/lib/db/models/serviceModel";
import {
  NewFormField,
  newFormFieldSchema,
} from "@/lib/validations/services/newFormFieldSchema";

interface FormFields extends NewFormField {
  serviceId: string;
}

export async function newFormField(
  prevState: ActionData,
  formData: FormFields
) {
  await connectDB();

  const { serviceId, ...data } = formData;

  const result = newFormFieldSchema.safeParse(data);
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
    const updatedService = await serviceModel.findByIdAndUpdate(serviceId, {
      $push: {
        formFields: result.data,
      },
    });

    console.log(updatedService);

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
