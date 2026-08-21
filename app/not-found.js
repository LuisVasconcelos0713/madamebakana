// app/not-found.jsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F8F5F2] px-5 text-center">
      <p className="mb-2 text-sm font-medium uppercase tracking-[0.15em] text-primary">
        Erro 404
      </p>

      <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        Página não encontrada
      </h1>

      <p className="mt-3 max-w-md text-sm text-gray-500 sm:text-base">
        A página que você procura não existe ou foi movida.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full border border-[#DDD3CB] bg-white px-6 py-2.5 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary"
      >
        Voltar para a loja
      </Link>
    </main>
  );
}
