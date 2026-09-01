import FooterCard from "../../components/FooterCard";
import prisma from "../../lib/prisma";

const page = async () => {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-[#FAFAFA] font-sans antialiased text-text">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-secondary/20 to-transparent blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Sobre a Madame Bakana
            </span>

            <h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Moda para expressar{" "}
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                quem você é.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Mais do que uma loja de roupas, a Madame Bakana é um espaço para
              descobrir seu estilo, experimentar novas possibilidades e se
              sentir bem com aquilo que veste.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="border-y border-gray-100 bg-white px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Imagem */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
                alt="Madame Bakana"
                className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-xl sm:block">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                Madame Bakana
              </p>
              <p className="mt-1 text-sm font-semibold text-text">
                Estilo que combina com você
              </p>
            </div>
          </div>

          {/* Texto */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Nossa história
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Uma loja feita para mulheres que gostam de{" "}
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                se sentir bem.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-7 text-muted sm:text-base">
              <p>
                A Madame Bakana nasceu de uma paixão por moda e pela vontade de
                oferecer peças que fossem além das tendências.
              </p>

              <p>
                Cada escolha é feita pensando em mulheres reais, com diferentes
                estilos, personalidades e momentos. Por isso, buscamos peças que
                possam fazer parte do dia a dia e também daquela ocasião
                especial.
              </p>

              <p>
                Nossa curadoria une estilo, qualidade e versatilidade para que
                você encontre roupas que tenham a sua cara e façam você se
                sentir ainda mais confiante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frase */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-8 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            “A melhor tendência é aquela que faz você{" "}
            <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              se sentir bem.
            </span>
            ”
          </h2>

          <p className="mt-6 text-sm text-muted">
            E é exatamente isso que buscamos transmitir em cada peça.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="border-y border-gray-100 bg-white px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              O que nos representa
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Mais do que roupas.{" "}
              <span className="text-primary">Uma experiência.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="rounded-3xl border border-gray-100 bg-[#FAFAFA] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                ✦
              </div>

              <h3 className="mt-6 text-lg font-bold">Curadoria</h3>

              <p className="mt-3 text-sm leading-6 text-muted">
                Cada peça é escolhida com cuidado para trazer estilo, qualidade
                e personalidade.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border border-gray-100 bg-[#FAFAFA] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                ♡
              </div>

              <h3 className="mt-6 text-lg font-bold">Atendimento</h3>

              <p className="mt-3 text-sm leading-6 text-muted">
                Gostamos de estar perto e ajudar você a encontrar aquilo que
                realmente combina com seu estilo.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl border border-gray-100 bg-[#FAFAFA] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                ◇
              </div>

              <h3 className="mt-6 text-lg font-bold">Versatilidade</h3>

              <p className="mt-3 text-sm leading-6 text-muted">
                Peças para diferentes momentos, ocasiões e versões de você.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-3xl border border-gray-100 bg-[#FAFAFA] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                ✓
              </div>

              <h3 className="mt-6 text-lg font-bold">Qualidade</h3>

              <p className="mt-3 text-sm leading-6 text-muted">
                Buscamos sempre unir beleza, conforto e qualidade em nossas
                escolhas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Nosso universo
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Um pouco da Madame Bakana
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={products[0].image}
                alt="Moda feminina"
                className="h-64 w-full object-cover transition duration-500 hover:scale-105 md:h-80"
              />
            </div>

            <div className="overflow-hidden rounded-3xl md:mt-10">
              <img
                src={products[5].image}
                alt="Look feminino"
                className="h-64 w-full object-cover transition duration-500 hover:scale-105 md:h-80"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={products[4].image}
                alt="Coleção feminina"
                className="h-64 w-full object-cover transition duration-500 hover:scale-105 md:h-80"
              />
            </div>

            <div className="overflow-hidden rounded-3xl md:mt-10">
              <img
                src={products[2].image}
                alt="Roupas femininas"
                className="h-64 w-full object-cover transition duration-500 hover:scale-105 md:h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-hover px-6 py-16 text-center text-white shadow-xl sm:px-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
            Madame Bakana
          </span>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Encontre peças que tenham a sua cara.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
            Explore nossa coleção e descubra novos favoritos para fazer parte do
            seu estilo.
          </p>

          <a
            href="/loja"
            className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 text-sm font-bold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gray-50"
          >
            Explorar coleção
          </a>
        </div>
      </section>
    </main>
  );
};

export default page;
