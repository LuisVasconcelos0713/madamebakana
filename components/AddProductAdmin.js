import { sendProduct } from "../actions/SendProduct";

const AddProductAdmin = () => {
  return (
    <form
      action={sendProduct}
      className="mx-auto flex w-full max-w-2xl flex-col gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Nome */}
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-sm font-semibold text-text">
            Nome do produto
          </label>

          <input
            type="text"
            name="name"
            placeholder="Ex: Vestido longo"
            className="rounded-xl border border-[#D9CCC2] bg-white px-4 py-3 text-sm text-text outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>

        {/* Preço */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-text">Preço</label>

          <input
            type="text"
            name="price"
            placeholder="R$ 0,00"
            className="rounded-xl border border-[#D9CCC2] bg-white px-4 py-3 text-sm text-text outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>

        {/* Desconto */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-text">Desconto</label>

          <input
            type="text"
            name="discount"
            placeholder="0%"
            className="rounded-xl border border-[#D9CCC2] bg-white px-4 py-3 text-sm text-text outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>

        {/* Imagem */}
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-sm font-semibold text-text">Imagem</label>

          <input
            type="text"
            name="imageLink"
            placeholder="URL da imagem"
            className="rounded-xl border border-[#D9CCC2] bg-white px-4 py-3 text-sm text-text outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-hover hover:shadow-md active:scale-[0.98]"
      >
        Adicionar produto
      </button>
    </form>
  );
};

export default AddProductAdmin;
