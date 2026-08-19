import prisma from "../lib/prisma";
import ProductCard from "./ProductCardAdmin";

const Products = async () => {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-row flex-wrap gap-15 justify-center mt-30 w-1/2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            discount={product.discount}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
