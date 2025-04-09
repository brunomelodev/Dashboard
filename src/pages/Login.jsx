import { useState } from "react";
import useAuth from "../hooks/useAuth";

function Login() {
  const { login } = useAuth();

  const [email, setEmail] = useState(() => {
    return localStorage.getItem("saved_email") || "";
  });
  const [password, setPassword] = useState("");
  const [device] = useState("dispositivo");
  const [error, setError] = useState(""); //estado para erro
  const [rememberMe, setRememberMe] = useState(() => {
    return localStorage.getItem("remember_me") === "true"; // ✅ ADICIONADO
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); //limpa o erro anterior

    // Validação simples de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError("Insira um e-mail válido.");
      return;
    }

    if (!password) {
      setError("A senha é obrigatória.");
      return;
    }

    try {
      if (rememberMe) {
        localStorage.setItem("saved_email", email); // ADICIONADO
        localStorage.setItem("remember_me", "true"); // ADICIONADO
      } else {
        localStorage.removeItem("saved_email"); // ADICIONADO
        localStorage.removeItem("remember_me"); // ADICIONADO
      }

      await login(email, password, device);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 sm:p-10">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Login</h1>
          <p className="text-sm text-gray-500">Entre com seu e-mail e senha!</p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg bg-red-100 text-red-700 px-4 py-3 text-sm border border-red-300">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
            />
          </div>

          {/* Senha */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Senha <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
                {/* Ícone olho (opcional) */}
              </span>
            </div>
          </div>

          {/* Checkbox + Link */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe} //  ADICIONADO
                onChange={(e) => setRememberMe(e.target.checked)} //  ADICIONADO
                className="w-5 h-5 border border-gray-300 rounded-md cursor-pointer"
              />
              <span className="text-sm text-gray-700">Lembrar</span>
            </label>
            <a
              className="text-sm text-blue-500 hover:text-blue-600"
              href="/reset-password"
            >
              Esqueceu a senha?
            </a>
          </div>

          {/* Botão */}
          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-3 text-sm text-white transition hover:bg-blue-600 disabled:bg-blue-300"
            >
              Entrar
            </button>
          </div>
        </form>

        {/* Link para cadastro */}
        <div className="mt-5 text-center text-sm text-gray-700">
          Não tem uma conta?{" "}
          <a href="/signup" className="text-blue-500 hover:text-blue-600">
            Cadastre-se
          </a>
        </div>
      </div>
    </div>
  );
}
export default Login;
