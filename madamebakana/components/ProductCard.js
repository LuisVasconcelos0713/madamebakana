const ProductCard = ({ name, price, image, discount }) => {
  const finalPrice = price - (price * (discount ?? 0)) / 100;

  const formattedPrice = finalPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const formattedOldPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

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
        {discount > 0 && (
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-sm">
            {discount}% OFF
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

          {discount > 0 && (
            <span className="pb-0.5 text-sm text-muted line-through">
              {formattedOldPrice}
            </span>
          )}
        </div>

        {discount > 0 && (
          <p className="mt-1 text-xs font-medium text-primary-hover">
            Você economiza {discount}% nesta peça
          </p>
        )}

        {/* WhatsApp */}
        <a
          href="https://wa.me/5551999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
        >
          Falar com vendedor
        </a>
      </div>
    </article>
  );
};

export default ProductCard;
