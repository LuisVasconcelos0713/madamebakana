"use client";

import Link from "next/link";
import { Menu, X, UserCog } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="relative z-50 border-b border-[#E8DED5] bg-background">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-text"
        >
          MADAME <span className="text-primary">BAKANA</span>
        </Link>

        {/* Links Desktop */}
        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-text transition-colors hover:text-primary"
          >
            Início
          </Link>

          <Link
            href="/loja"
            className="text-sm font-medium text-text transition-colors hover:text-primary"
          >
            Loja
          </Link>

          <Link
            href="/sobre"
            className="text-sm font-medium text-text transition-colors hover:text-primary"
          >
            Sobre
          </Link>
        </div>

        {/* Ações */}
        <div className="flex items-center gap-3">
          {/* Admin */}
          <Link
            href="/admin"
            className="flex items-center justify-center rounded-full border border-[#D9CCC2] p-2 text-text transition hover:border-primary hover:text-primary"
          >
            <UserCog size={20} strokeWidth={1.8} />
          </Link>

          {/* Menu Mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            className="flex items-center justify-center rounded-full border border-[#D9CCC2] p-2 text-text transition hover:border-primary hover:text-primary md:hidden"
          >
            {isOpen ? (
              <X size={21} strokeWidth={1.8} />
            ) : (
              <Menu size={21} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </nav>

      {/* Dropdown Mobile */}
      <div
        className={`absolute left-0 right-0 top-full border-b border-[#E8DED5] bg-background shadow-lg transition-all duration-300 md:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col">
            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-[#E8DED5]/60 py-4 text-sm font-medium text-text transition-colors hover:text-primary"
            >
              Início
            </Link>

            <Link
              href="/loja"
              onClick={closeMenu}
              className="border-b border-[#E8DED5]/60 py-4 text-sm font-medium text-text transition-colors hover:text-primary"
            >
              Loja
            </Link>

            <Link
              href="/sobre"
              onClick={closeMenu}
              className="py-4 text-sm font-medium text-text transition-colors hover:text-primary"
            >
              Sobre
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
