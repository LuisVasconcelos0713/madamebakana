import Link from "next/link";
import prisma from "../../../lib/prisma";

const ProductPage = async ({ params }) => {
  const { Slug } = await params;

  const product = await prisma.product.findUnique({
    where: {
      slug: Slug,
    },
  });

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FAFAFA] px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Madame Bakana
          </span>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text">
            Produto não encontrado
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted">
            Essa peça pode ter sido removida ou não está mais disponível.
          </p>

          <Link
            href="/loja"
            className="mt-8 inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
          >
            Voltar para a loja
          </Link>
        </div>
      </main>
    );
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
    <main className="min-h-screen bg-[#FAFAFA] font-sans antialiased text-text">
      {/* Breadcrumb */}
      <section className="px-6 pt-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/loja"
            className="text-sm font-medium text-muted transition hover:text-primary"
          >
            ← Voltar para a loja
          </Link>
        </div>
      </section>

      {/* Produto */}
      <section className="px-6 py-10 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Imagem */}
          <div className="relative overflow-hidden rounded-[2rem] bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              className="h-[550px] w-full object-cover sm:h-[650px] lg:h-[700px]"
            />

            {safeDiscount > 0 && (
              <span className="absolute left-5 top-5 rounded-full bg-primary px-4 py-2 text-xs font-bold tracking-wide text-white shadow-lg">
                {safeDiscount}% OFF
              </span>
            )}
          </div>

          {/* Informações */}
          <div className="lg:sticky lg:top-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Madame Bakana
            </span>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {product.name}
            </h1>

            {/* Preço */}
            <div className="mt-7">
              {safeDiscount > 0 ? (
                <>
                  <div className="flex items-end gap-4">
                    <span className="text-4xl font-extrabold tracking-tight text-primary">
                      {formattedPrice}
                    </span>

                    <span className="pb-1 text-base text-muted line-through">
                      {formattedOldPrice}
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-medium text-primary-hover">
                    Você economiza {safeDiscount}% nesta peça
                  </p>
                </>
              ) : (
                <span className="text-4xl font-extrabold tracking-tight text-primary">
                  {formattedPrice}
                </span>
              )}
            </div>

            {/* Separador */}
            <div className="my-8 h-px bg-gray-200" />

            {/* Descrição */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider">
                Sobre a peça
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                Gostou dessa peça? Entre em contato conosco pelo WhatsApp para
                consultar disponibilidade, tamanhos, cores e todos os detalhes.
              </p>
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/5551992534247?text=${encodeURIComponent(
                `Olá! Tenho interesse na peça "${product.name}". Gostaria de saber mais detalhes e a disponibilidade.`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-xl"
            >
              Falar com vendedor
            </a>

            {/* Informações */}
            <div className="mt-8 grid grid-cols-1 divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white">
              <div className="flex items-center gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  ✓
                </div>

                <div>
                  <h3 className="text-sm font-bold">
                    Atendimento personalizado
                  </h3>

                  <p className="mt-1 text-xs text-muted">
                    Tire suas dúvidas diretamente conosco.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  ♡
                </div>

                <div>
                  <h3 className="text-sm font-bold">Peça selecionada</h3>

                  <p className="mt-1 text-xs text-muted">
                    Nossa curadoria busca unir estilo e qualidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA inferior */}
      <section className="px-6 pb-24 pt-10 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-hover px-6 py-14 text-center text-white shadow-xl sm:px-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
            Madame Bakana
          </span>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Gostou dessa peça?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
            Fale conosco pelo WhatsApp e descubra todos os detalhes, tamanhos e
            disponibilidade.
          </p>

          <a
            href={`https://wa.me/5551992534247?text=${encodeURIComponent(
              `Olá! Tenho interesse na peça "${product.name}".`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 text-sm font-bold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gray-50"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
