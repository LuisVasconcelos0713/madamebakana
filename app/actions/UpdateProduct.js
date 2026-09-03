"use server";
import { revalidatePath } from "next/cache";
import prisma from "../../lib/prisma";

export async function UpdateProduct(formData) {
  const id = formData.get("id");
  const name = formData.get("name");
  const price = formData.get("price");
  const discount = formData.get("discount");
  const imageLink = formData.get("image");
  const productSlug = formData.get("slug").trim().replace(/\s+/g, "-");

  const product = await prisma.product.update({
    where: { id },
    data: {
      name: name,
      slug: productSlug,
      price: Number(price),
      discount: discount ? Number(discount) : null,
      image: imageLink,
    },
  });

  revalidatePath("/admin");
}
