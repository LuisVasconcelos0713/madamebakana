import Products from "../../components/Products";
import AddProductAdmin from "../../components/AddProductAdmin";
import { auth } from "../../auth";
import SignOutButton from "../../components/SignOutButton";

const Page = async () => {
  const session = await auth();

  return (
    <main className="min-h-screen bg-[#F8F5F2] px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-12 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.15em] text-primary">
              Administração
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Painel de produtos
            </h1>
            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              Gerencie o catálogo da sua loja.
            </p>
          </div>

          <SignOutButton />
        </header>

        {/* Adicionar produto */}
        <section className="mb-14">
          <div className="mb-6 flex items-center gap-4">
            <div>
              <h2 className="text-xl font-semibold text-text">
                Adicionar produto
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Cadastre um novo produto no catálogo.
              </p>
            </div>

            <div className="h-px flex-1 bg-[#DDD3CB]" />
          </div>

          <AddProductAdmin />
        </section>

        {/* Produtos */}
        <section>
          <div className="mb-6 flex items-center gap-4 ">
            <div>
              <h2 className="text-xl font-semibold text-text">
                Produtos no catálogo
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Visualize e gerencie os produtos cadastrados.
              </p>
            </div>

            <div className="h-px flex-1 bg-[#DDD3CB]" />
          </div>

          <Products />
        </section>
      </div>
    </main>
  );
};

export default Page;
