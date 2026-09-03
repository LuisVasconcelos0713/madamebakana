"use client";

import Link from "next/link";

const ProductCard = ({ product }) => {
  if (!product) {
    return null;
  }
  const safePrice = product.price ?? 0;
  const safeDiscount = product.discount ?? 0;
  const finalPrice = safePrice - (safePrice * safeDiscount) / 100;

  const formattedPrice = finalPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const formattedOldPrice = safePrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="group w-full max-w-sm">
      <Link href={`/loja/${product.slug}`}>
        {/* Imagem */}
        <div className="relative overflow-hidden rounded-3xl bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="h-[420px] w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          />

          {/* Desconto */}
          {safeDiscount > 0 && (
            <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1.5 text-xs font-bold tracking-wide text-white shadow-sm">
              {safeDiscount}% OFF
            </span>
          )}

          {/* Favorito */}
          <button
            aria-label={`Adicionar ${product.name} aos favoritos`}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl text-text shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:text-primary"
          >
            ♡
          </button>

          {/* Overlay no hover */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/30 to-transparent p-5 transition-transform duration-500 group-hover:translate-y-0" />
        </div>

        {/* Informações */}
        <div className="pt-5">
          <h2 className="text-base font-semibold tracking-tight text-text">
            {product.name}
          </h2>

          {/* Preços/Economia */}
          {safeDiscount > 0 ? (
            <div>
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
              <p className="mt-1 text-xs font-medium text-primary-hover">
                Você economiza {safeDiscount}% nesta peça
              </p>
            </div>
          ) : (
            <div className="mt-2 mb-10 flex items-end gap-3">
              <span className="text-2xl font-bold tracking-tight text-primary">
                {formattedPrice}
              </span>
            </div>
          )}
        </div>
      </Link>

      <div>
        {/* WhatsApp */}
        <a
          href="https://wa.me/5551992534247"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-hover hover:shadow-md"
        >
          Falar com vendedor
        </a>
      </div>
    </article>
  );
};

export default ProductCard;
