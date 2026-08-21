"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProductCard from "./ProductCard";

// Import CSS do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductCarousel({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="rounded-3xl border border-gray-100 bg-white/80 p-16 text-center shadow-sm backdrop-blur-md">
        <p className="text-lg font-semibold text-text">
          Nenhum produto disponível
        </p>
        <p className="mt-2 text-sm text-muted">
          Em breve teremos novidades por aqui.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-14!"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="h-auto">
            <ProductCard
              name={product.name}
              price={product.price}
              image={product.image}
              discount={product.discount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
