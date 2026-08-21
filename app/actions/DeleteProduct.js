"use server";

import { revalidatePath } from "next/cache";

export async function DeleteProduct(id) {
  const product = await prisma.product.delete({
    where: { id },
  });

  revalidatePath("/admin");
}
