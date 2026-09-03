import prisma from "../../lib/prisma";
import ProductCard from "../../components/ProductCard";

const LojaPage = async () => {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-[#FAFAFA] font-sans antialiased">
      {/* Hero da Loja */}
      <section className="relative overflow-hidden px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[550px] w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-secondary/20 to-transparent blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            {/* Título */}
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Coleção Madame Bakana
              </span>

              <h1 className="mt-4 max-w-4xl text-5xl font-extrabold tracking-tight text-text sm:text-6xl lg:text-7xl lg:leading-[1.05]">
                Encontre peças que{" "}
                <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  combinam com você.
                </span>
              </h1>
            </div>

            {/* Descrição */}
            <div className="lg:col-span-4 lg:pb-2">
              <p className="max-w-md text-sm leading-7 text-muted sm:text-base">
                Explore nossa seleção de peças e descubra novos favoritos para
                fazer parte do seu estilo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separador / Informações */}
      <section className="border-y border-gray-200/60 bg-white/60 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-gray-100 px-6 py-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10">
          <div className="flex items-center gap-4 px-5 py-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-lg text-primary">
              ✦
            </div>

            <div>
              <h3 className="text-sm font-bold text-text">
                Peças selecionadas
              </h3>
              <p className="mt-0.5 text-xs text-muted">Curadoria especial</p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-5 py-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-lg text-primary">
              ♡
            </div>

            <div>
              <h3 className="text-sm font-bold text-text">
                Atendimento próximo
              </h3>
              <p className="mt-0.5 text-xs text-muted">
                Tire suas dúvidas pelo WhatsApp
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-5 py-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-lg text-primary">
              ✓
            </div>

            <div>
              <h3 className="text-sm font-bold text-text">Compra fácil</h3>
              <p className="mt-0.5 text-xs text-muted">
                Escolha sua peça e fale conosco
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          {/* Cabeçalho */}
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Disponíveis agora
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
                Nossa coleção
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-muted">
              Todas as peças disponíveis em nossa loja. Escolha suas favoritas e
              entre em contato para saber mais.
            </p>
          </div>

          {/* Grade */}
          {products.length === 0 ? (
            <div className="flex min-h-[350px] flex-col items-center justify-center rounded-[2rem] border border-dashed border-gray-200 bg-white text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                ✦
              </div>

              <h3 className="mt-5 text-lg font-bold text-text">
                Nenhuma peça disponível
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
                Estamos preparando novidades para você. Volte em breve para
                conferir nossa coleção.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-hover px-6 py-16 text-center text-white shadow-xl sm:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
              Encontrou sua favorita?
            </span>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Seu próximo look pode estar aqui.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              Gostou de alguma peça? Entre em contato conosco pelo WhatsApp e
              descubra todos os detalhes.
            </p>

            <a
              href="https://wa.me/5551992534247"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 text-sm font-bold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gray-50"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LojaPage;
