"use server";
import prisma from "../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function sendProduct(formData) {
  const productName = formData.get("name");
  const productPrice = formData.get("price");
  const productDiscount = formData.get("discount");
  const productImageLink = formData.get("imageLink");
  const productSlug = formData
    .get("slug")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const price = Number(productPrice);
  const discount = Number(productDiscount);

  if (price <= discount) {
    console.log("Preço não pode ser menor que o valor de desconto!");
  } else {
    const product = await prisma.product.create({
      data: {
        name: productName,
        slug: productSlug,
        price: Number(productPrice),
        discount: productDiscount ? Number(productDiscount) : null,
        image: productImageLink,
      },
    });
    console.log(product);
  }

  revalidatePath("/");
}
