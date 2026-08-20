import { UserCog } from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b border-[#E8DED5] bg-background">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="text-xl font-bold tracking-tight text-text">
          MADAME <span className="text-primary">BAKANA</span>
        </a>

        {/* Links */}
        <div className="hidden items-center gap-10 md:flex">
          <a
            href="/"
            className="text-sm font-medium text-text transition-colors hover:text-primary"
          >
            Início
          </a>

          <a
            href="/loja"
            className="text-sm font-medium text-text transition-colors hover:text-primary"
          >
            Loja
          </a>

          <a
            href="/sobre"
            className="text-sm font-medium text-text transition-colors hover:text-primary"
          >
            Sobre
          </a>
        </div>

        {/* Ações */}
        <div className="flex items-center gap-3">
          <a
            href="/admin"
            className="flex items-center justify-center rounded-full border border-[#D9CCC2] p-2 text-sm font-medium text-text transition hover:border-primary hover:text-primary"
          >
            <UserCog size={20} strokeWidth={1.8} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
