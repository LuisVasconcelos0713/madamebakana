import Counter from "../components/Counter";
import ProductCard from "../components/ProductCard";

const page = () => {
  const products = [
    {
      id: 1,
      name: "Camiseta Oversized",
      price: 89.9,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      discount: 30,
    },
    {
      id: 2,
      name: "Calça Wide Leg",
      price: 149.9,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      discount: 30,
    },
    {
      id: 3,
      name: "Jaqueta Jeans",
      price: 289.9,
      image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923",
    },
    {
      id: 4,
      name: "Moletom Basic",
      price: 189.9,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
      discount: 45,
    },
    {
      id: 5,
      name: "Camiseta Oversized",
      price: 89.9,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      discount: 54,
    },
    {
      id: 6,
      name: "Calça Wide Leg",
      price: 149.9,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      discount: 45,
    },
    {
      id: 7,
      name: "Jaqueta Jeans",
      price: 89.9,
      image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923",
    },
    {
      id: 8,
      name: "Moletom Basic",
      price: 89.9,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    },
    {
      id: 9,
      name: "Camiseta Oversized",
      price: 89.9,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 10,
      name: "Calça Wide Leg",
      price: 149.9,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    },
    {
      id: 11,
      name: "Jaqueta Jeans",
      price: 199.9,
      image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923",
    },
    {
      id: 12,
      name: "Moletom Basic",
      price: 129.9,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    },
  ];

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
