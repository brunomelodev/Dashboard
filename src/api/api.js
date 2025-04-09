import axios from "axios";

// Criamos uma instância do Axios com a URL base da API
const api = axios.create({
  baseURL: "http://localhost:3000", // Substitua pela URL da sua API
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Interceptor para adicionar o token JWT automaticamente
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
