import Counter from "../components/Counter";
import ProductCard from "../components/ProductCard";

const page = async () => {
  const products = await prisma.product.findMany();
  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="flex flex-row flex-wrap gap-15 justify-center mt-30 w-1/2">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              discount={product.discount}
            ></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
