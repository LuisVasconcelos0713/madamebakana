import ProductCard from "../components/ProductCard";
import prisma from "../lib/prisma";

const page = async () => {
  const products = await prisma.product.findMany();

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-20 lg:px-10">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            {/* Texto */}
            <div className="max-w-xl">
              <span className="inline-flex rounded-full bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
                Nova coleção
              </span>

              <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-text sm:text-6xl lg:text-7xl">
                Seu estilo,
                <span className="block text-primary">sua essência.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg">
                Descubra peças escolhidas para valorizar sua personalidade, com
                conforto, elegância e aquele toque especial que faz toda
                diferença.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#produtos"
                  className="flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
                >
                  Ver coleção
                </a>

                <a
                  href="#sobre"
                  className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-text transition hover:bg-secondary"
                >
                  Conheça a loja
                </a>
              </div>
            </div>

            {/* Destaque visual */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-secondary blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] bg-secondary p-3 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
                  alt="Coleção feminina"
                  className="h-[520px] w-full rounded-[1.5rem] object-cover"
                />

                <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/90 p-5 shadow-lg backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Destaque
                  </p>

                  <p className="mt-1 text-lg font-bold text-text">
                    Elegância para todos os momentos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-gray-100 px-6 py-8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="flex items-center justify-center gap-4 px-6 py-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-xl">
              ✦
            </div>

            <div>
              <h3 className="text-sm font-bold text-text">
                Peças selecionadas
              </h3>
              <p className="mt-1 text-xs text-muted">
                Qualidade em cada detalhe
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 px-6 py-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-xl">
              ♡
            </div>

            <div>
              <h3 className="text-sm font-bold text-text">Feito com carinho</h3>
              <p className="mt-1 text-xs text-muted">
                Atendimento personalizado
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 px-6 py-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-xl">
              ✓
            </div>

            <div>
              <h3 className="text-sm font-bold text-text">Compra fácil</h3>
              <p className="mt-1 text-xs text-muted">
                Fale diretamente conosco
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Sobre nós
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Moda que combina com você
            </h2>

            <p className="mt-5 leading-7 text-muted">
              Acreditamos que se vestir bem vai muito além das tendências. Cada
              peça deve fazer você se sentir confortável, confiante e autêntica.
            </p>

            <p className="mt-4 leading-7 text-muted">
              Por isso, selecionamos nossas peças pensando em diferentes estilos
              e momentos, sempre buscando unir beleza, qualidade e
              personalidade.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
                alt="Moda feminina"
                className="h-72 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3"
                alt="Roupas femininas"
                className="h-72 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="bg-secondary/50 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Nossa coleção
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Peças em destaque
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-muted">
                Confira alguns dos nossos produtos e encontre o próximo item
                favorito do seu guarda-roupa.
              </p>
            </div>

            <a
              href="#produtos"
              className="text-sm font-semibold text-primary transition hover:text-primary-hover"
            >
              Ver todos →
            </a>
          </div>

          <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                discount={product.discount}
              />
            ))}
          </div>

          {products.length === 0 && (
            <div className="rounded-3xl bg-white px-6 py-16 text-center">
              <p className="text-lg font-semibold text-text">
                Nenhum produto disponível
              </p>

              <p className="mt-2 text-sm text-muted">
                Em breve teremos novidades por aqui.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-primary px-8 py-16 text-center shadow-xl sm:px-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            Encontre seu próximo look
          </span>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Gostou de alguma peça?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
            Fale conosco pelo WhatsApp e tire suas dúvidas sobre tamanhos,
            disponibilidade e formas de compra.
          </p>

          <a
            href="https://wa.me/5551992534247"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-primary transition hover:bg-secondary"
          >
            Falar com vendedor
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="font-bold text-text">Madame Bakana</p>

            <p className="mt-1 text-xs text-muted">
              Moda, estilo e personalidade.
            </p>
          </div>

          <p className="text-xs text-muted">
            © 2026 Madame Bakana. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default page;
