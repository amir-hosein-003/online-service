"use server";

import { revalidatePath } from "next/cache";

import { connectDB } from "@/lib/db/connectDB";
import serviceModel from "@/lib/db/models/serviceModel";

export async function serviceStatusHandler(serviceId: string) {
  await connectDB();

  const foundService = await serviceModel.findOne({ _id: serviceId });
  if (!foundService) {
    return {
      message: "ERROR",
      errors: ["Service not found"],
    };
  }

  await serviceModel.findByIdAndUpdate(serviceId, {
    isActive: !foundService.isActive,
  });

  revalidatePath("/admin/services");
  return {
    message: "SUCCESS",
    errors: [],
  };
}
