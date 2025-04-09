import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const navigate = useNavigate();

  // Memoriza a função de logout para evitar re-renderizações desnecessárias
  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete api.defaults.headers.common["Authorization"];
    navigate("/login");
  }, [navigate]);

  // Memoriza fetchUser para evitar recriação
  const fetchUser = useCallback(async () => {
    try {
      const response = await api.get("/me");
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      logout();
    }
  }, [logout]);

  // Recupera usuário salvo no localStorage ao iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Configura token e busca usuário
  useEffect(() => {
    let isMounted = true;

    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      fetchUser().catch(() => {
        if (isMounted) logout();
      });
    }

    return () => {
      isMounted = false;
    };
  }, [token, fetchUser, logout]);

  const login = async (email, password, device_name) => {
    try {
      const response = await api.post("/auth", {
        email,
        password,
        device_name,
      });

      const { token } = response.data;
      if (!token) throw new Error("Token ausente na resposta da API");

      setToken(token);
      localStorage.setItem("token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      await fetchUser();
      navigate("/"); //joga para a página inicial
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Erro no login:", message);
      throw new Error(message); // propaga para o componente que chamou
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
