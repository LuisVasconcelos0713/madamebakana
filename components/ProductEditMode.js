import { UpdateProduct } from "../app/actions/UpdateProduct";

const ProductEditMode = ({ product, onCancel }) => {
  return (
    <div className="w-full">
      <form
        action={async (formData) => {
          await UpdateProduct(formData);
          onCancel();
        }}
        className="space-y-5"
      >
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-xl font-bold tracking-tight text-text">
            Editar produto
          </h3>
          <p className="mt-1 text-sm text-muted">
            Atualize as informações do produto abaixo.
          </p>
        </div>

        <input type="hidden" name="id" value={product.id} />

        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-text">
            Nome do produto
          </label>

          <input
            type="text"
            id="name"
            name={"name"}
            placeholder={product.name}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-text outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
            defaultValue={product.name}
            required
          ></input>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <label htmlFor="price" className="text-sm font-semibold text-text">
              Preço
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-muted">
                R$
              </span>

              <input
                type="text"
                id="price"
                name={"price"}
                placeholder={product.price}
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-text outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                defaultValue={product.price}
                required
              ></input>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="discount"
              className="text-sm font-semibold text-text"
            >
              Desconto
            </label>

            <div className="relative">
              <input
                type="text"
                id="discount"
                name={"discount"}
                placeholder={product.discount}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pr-10 text-sm text-text outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
                defaultValue={product.discount}
              ></input>

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-muted">
                %
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="image" className="text-sm font-semibold text-text">
            URL da imagem
          </label>

          <input
            type="text"
            id="image"
            name={"image"}
            placeholder={product.image}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-text outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
            defaultValue={product.image}
            required
          ></input>
        </div>

        <div className="space-y-2">
          <label htmlFor="slug" className="text-sm font-semibold text-text">
            Slug
          </label>

          <input
            type="text"
            id="slug"
            name={"slug"}
            placeholder={product.slug}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-text outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10"
            defaultValue={product.slug}
            required
          ></input>
        </div>

        <div className="flex gap-3 border-t border-gray-200 pt-4">
          <button
            type="submit"
            className="flex-1 rounded-xl bg-primary py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-hover hover:shadow-md active:scale-[0.98]"
          >
            Salvar alterações
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="flex-1 rounded-xl border border-gray-200 bg-white py-3 text-sm font-semibold text-text transition hover:bg-gray-50 active:scale-[0.98]"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductEditMode;
