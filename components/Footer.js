const Footer = () => {
  return (
    <footer className="border-t border-gray-200/60 bg-background">
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
  );
};

export default Footer;
