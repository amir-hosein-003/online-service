"use server";

import { connectDB } from "@/lib/db/connectDB";
import serviceModel from "@/lib/db/models/serviceModel";

export async function getServicesList() {
  await connectDB();

  const services = await serviceModel.find({}).lean().exec();
  if (!services) return { message: "ERROR", data: [] };

  return {
    message: "SUCCESS",
    data: services,
  };
}
