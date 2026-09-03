import FooterCard from "../components/FooterCard";
import ProductCarousel from "../components/ProductCarrousel";
import prisma from "../lib/prisma";

const page = async () => {
  // Busca os últimos 10 produtos cadastrados
  const products = await prisma.product.findMany({
    take: 10,
    orderBy: {
      id: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-[#FAFAFA] font-sans antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 pb-16 lg:pb-24">
        {/* Glow Spheres */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-secondary/20 to-transparent blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Texto */}
            <div className="max-w-2xl lg:col-span-7">
              <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-text sm:text-6xl lg:text-7xl lg:leading-[1.1]">
                Seu estilo, <br />
                <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  sua essência.
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                Descubra peças exclusivas desenhadas para destacar sua
                personalidade. Elegância, conforto e sofisticação em cada
                detalhe.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/loja"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
                >
                  Explorar coleção
                </a>

                <a
                  href="/sobre"
                  className="inline-flex items-center justify-center rounded-2xl border border-gray-200/80 bg-white/80 px-8 py-4 text-sm font-bold text-text backdrop-blur-sm transition-all hover:border-gray-300 hover:bg-gray-50"
                >
                  Conheça a loja
                </a>
              </div>
            </div>

            {/* Destaque Visual */}
            <div className="relative lg:col-span-5">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-white/60 to-white/20 p-3 shadow-2xl backdrop-blur-xl ring-1 ring-black/5">
                <img
                  src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
                  alt="Coleção feminina"
                  className="h-[540px] w-full rounded-[2rem] object-cover"
                />

                <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/40 bg-white/85 p-5 shadow-xl backdrop-blur-md">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    Destaque da semana
                  </span>
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
      <section className="border-y border-gray-200/60 bg-white/60 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-gray-100 px-6 py-8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="flex items-center gap-4 px-6 py-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
              ✦
            </div>
            <div>
              <h3 className="text-sm font-bold text-text">
                Peças Selecionadas
              </h3>
              <p className="mt-0.5 text-xs text-muted">
                Curadoria de altíssima qualidade
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-6 py-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
              ♡
            </div>
            <div>
              <h3 className="text-sm font-bold text-text">
                Atendimento Exclusivo
              </h3>
              <p className="mt-0.5 text-xs text-muted">
                Suporte humanizado no WhatsApp
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-6 py-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
              ✓
            </div>
            <div>
              <h3 className="text-sm font-bold text-text">Compra Segura</h3>
              <p className="mt-0.5 text-xs text-muted">
                Praticidade e rapidez no envio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Produtos com Carrossel */}
      <section id="produtos" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Últimas Novidades
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
                Lançamentos Recentes
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted">
              Confira os últimos itens adicionados a nossa coleção!
            </p>
          </div>

          {/* Render do Carrossel */}
          <ProductCarousel products={products} />
        </div>
      </section>

      {/* Sobre nós */}
      <section
        id="sobre"
        className="border-t border-gray-100 bg-white/50 px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Nossa história
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
                Moda feita para destacar quem você é
              </h2>
              <p className="mt-6 leading-relaxed text-muted">
                Acreditamos que se vestir bem é uma forma de autoexpressão.
                Nossa missão é selecionar itens que unam caimento impecável,
                tecidos de qualidade e design atemporal.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
                  alt="Moda feminina"
                  className="h-88 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="mt-8 overflow-hidden rounded-3xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3"
                  alt="Roupas femininas"
                  className="h-80 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterCard></FooterCard>
    </main>
  );
};

export default page;
