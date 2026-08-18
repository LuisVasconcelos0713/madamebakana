import prisma from "../../../lib/prisma";

const GET = async () => {
  const products = await prisma.product.findMany()
  return Response.json(products)
};

export { GET }