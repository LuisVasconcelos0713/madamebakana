import { sendProduct } from "../../actions/SendProduct";
import Products from "../../components/Products";

const Page = () => {
  return (
    <div>
      <form
        action={sendProduct}
        className="mx-auto flex w-full max-w-md flex-col gap-5 rounded-2xl bg-secondary p-6 shadow-sm"
      >
        <div>
          <h2 className="text-xl font-bold text-text">Adicionar produto</h2>
          <p className="mt-1 text-sm text-muted">
            Preencha as informações do produto.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-text">
            Nome do produto
          </label>
          <input
            type="text"
            name="name"
            placeholder="Product name"
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-text outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-text">Preço</label>
          <input
            type="text"
            name="price"
            placeholder="Product price"
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-text outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-text">Desconto</label>
          <input
            type="text"
            name="discount"
            placeholder="Product discount"
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-text outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-text">Imagem</label>
          <input
            type="text"
            name="imageLink"
            placeholder="ImageLink"
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-text outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
          ></input>
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-hover hover:shadow-md active:scale-[0.98]"
        >
          Enviar dados
        </button>
      </form>

      <h1 className="mt-8 text-center text-2xl font-bold text-text">Teste</h1>
      <Products></Products>
    </div>
  );
};

export default Page;
