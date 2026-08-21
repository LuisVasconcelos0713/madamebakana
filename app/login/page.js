import LoginAdmin from "../actions/LoginAdmin";

export const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
        {/* Título */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-text">Painel Admin</h1>
          <p className="mt-1 text-xs text-muted">
            Entre com suas credenciais de acesso
          </p>
        </div>

        {/* Formulário */}
        <form action={LoginAdmin} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-text">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="seu@email.com"
              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10"
              required
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold text-text">
              Senha
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-hover active:scale-[0.99]"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
