"use server";

import prisma from "@/lib/prisma";
import { CreateCategorySchema } from "@/schema/categories";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function CreateCategory(form: CreateCategorySchema) {
  const parsedBody = CreateCategorySchema.safeParse(form);

  if (!parsedBody.success) {
    throw new Error("bad request");
  }

  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const { icon, name, type } = parsedBody.data;

  return await prisma.category.create({
    data: {
      userId: user.id,
      icon,
      name,
      type,
    },
  });
}
