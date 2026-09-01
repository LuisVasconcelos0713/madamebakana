const FooterCard = () => {
  return (
    <section className="px-6 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-hover px-8 py-20 text-center shadow-2xl sm:px-16">
        <div className="relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            Atendimento Personalizado
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Encontrou algo que amou?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/90">
            Fale diretamente conosco pelo WhatsApp para consultar tamanhos,
            cores disponíveis ou finalizar seu pedido com comodidade.
          </p>
          <a
            href="https://wa.me/5551992534247"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-2xl bg-white px-8 py-4 text-sm font-bold text-primary shadow-xl transition-all hover:bg-secondary hover:scale-105"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterCard;
