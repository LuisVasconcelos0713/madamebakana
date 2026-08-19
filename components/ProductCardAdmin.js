"use client";

import { useState } from "react";
import ProductEditMode from "./ProductEditMode";

const ProductCardAdmin = ({ name, price, discount, image, id }) => {
  const [editMode, setEditMode] = useState(false);

  const safePrice = price ?? 0;
  const safeDiscount = discount ?? 0;
  const finalPrice = safePrice - (safePrice * (safeDiscount ?? 0)) / 100;

  const formattedPrice = finalPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const formattedOldPrice = safePrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  if (editMode) {
    return (
      <div className="w-full max-w-sm rounded-2xl bg-secondary p-4">
        <ProductEditMode
          product={{
            id,
            name,
            price: safePrice,
            discount: safeDiscount,
            image,
          }}
          onCancel={() => setEditMode(false)}
        />
      </div>
    );
  }

  return (
    <article className="group w-full max-w-sm">
      {/* Imagem */}
      <div className="relative overflow-hidden rounded-2xl bg-secondary">
        <img
          src={image}
          alt={name}
          className="h-[420px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Desconto */}
        {safeDiscount > 0 && (
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-sm">
            {safeDiscount}% OFF
          </span>
        )}

        {/* Favorito */}
        <button
          aria-label={`Adicionar ${name} aos favoritos`}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl text-text shadow-sm backdrop-blur transition hover:bg-white hover:text-primary"
        >
          ♡
        </button>
      </div>

      {/* Informações */}
      <div className="pt-4">
        <h2 className="text-base font-semibold tracking-tight text-text">
          {name}
        </h2>

        <div className="mt-2 flex items-end gap-3">
          <span className="text-2xl font-bold tracking-tight text-primary">
            {formattedPrice}
          </span>

          {safeDiscount > 0 && (
            <span className="pb-0.5 text-sm text-muted line-through">
              {formattedOldPrice}
            </span>
          )}
        </div>

        {safeDiscount > 0 && (
          <p className="mt-1 text-xs font-medium text-primary-hover">
            Você economiza {safeDiscount}% nesta peça
          </p>
        )}

        {/* WhatsApp */}
        <a
          href="https://wa.me/5551992534247"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
        >
          Falar com vendedor
        </a>
        <button
          onClick={() => setEditMode(true)}
          className="mt-2 w-full rounded-xl border border-gray-300 py-2 text-xs font-semibold text-text transition hover:bg-gray-100"
        >
          Editar Produto
        </button>
      </div>
    </article>
  );
};

export default ProductCardAdmin;
