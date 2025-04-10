//import { useCallback, useEffect, useState } from "react";
import api from "../api/api";

import { useCallback, useEffect, useState } from "react";

function ListSchools() {
  const [schools, setSchools] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [debouncedFilter, setDebouncedFilter] = useState(""); //usado para esperar o usuário digitar

  const fetchSchools = useCallback(
    async (page, perPage) => {
      try {
        setLoading(true);
        const response = await api.get("http://localhost:3000/schools", {
          params: {
            page,
            total_per_page: perPage,
            address: true,
            filter: debouncedFilter, // adicionado aqui
          },
        });
        setSchools(response.data.data);
        setPagination(response.data.meta);
      } catch (error) {
        console.error("Erro ao buscar escolas:", error);
      } finally {
        setLoading(false);
      }
    },
    [debouncedFilter]
  );

  useEffect(() => {
    fetchSchools(currentPage, perPage);
  }, [currentPage, perPage, fetchSchools]);

  /** start: debounced usado para esperar o usuário digitar */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedFilter(filter);
      setCurrentPage(1); // opcional: reinicia a paginação a cada nova busca
    }, 500); // 500ms de delay
    /** end: debounced usado para esperar o usuário digitar */

    return () => clearTimeout(timeout); // limpa timeout anterior
  }, [filter]);

  const handlePageChange = (page) => {
    if (page && page !== currentPage && typeof page === "number") {
      setCurrentPage(page);
    }
  };

  const generatePageNumbers = () => {
    const { current_page, last_page } = pagination;
    const pages = [];

    if (last_page <= 7) {
      for (let i = 1; i <= last_page; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (current_page > 4) pages.push("...");

      const start = Math.max(2, current_page - 1);
      const end = Math.min(last_page - 1, current_page + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (current_page < last_page - 3) pages.push("...");
      pages.push(last_page);
    }

    return pages;
  };

  return (
    <section className="p-6 xl:max-w-7xl xl:mx-auto">
      <div className="rounded-2xl bg-white p-6 shadow-md mb-6">
        <div className="overflow-x-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Escolas</h1>

            <div className="flex items-center gap-2">
              <label htmlFor="search" className="text-sm">
                Buscar por nome:
              </label>
              <input
                id="search"
                type="text"
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                  setCurrentPage(1); // volta para a primeira página
                }}
                placeholder="Digite o nome..."
                className="border rounded px-2 py-1"
              />
            </div>

            <div>
              <label className="mr-2">Registros por página:</label>
              <select
                value={perPage}
                onChange={(e) => {
                  setPerPage(Number(e.target.value));
                  setCurrentPage(1); // Resetar para a primeira página
                }}
                className="border rounded px-2 py-1"
              >
                <option value={1}>1</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            </div>
          </div>
          {loading ? (
            <p>Carregando...</p>
          ) : (
            <>
              <table className="w-full text-sm text-left">
                <thead className="border-b text-gray-700">
                  <tr>
                    <th className="p-3">Nome</th>
                    <th className="p-3 cursor-pointer select-none">Cnpj</th>
                    <th className="p-3 hidden sm:table-cell cursor-pointer select-none">
                      Telefone
                    </th>
                    <th className="p-3 hidden sm:table-cell cursor-pointer select-none">
                      E-mail
                    </th>
                    <th className="p-3 hidden sm:table-cell cursor-pointer select-none">
                      Endereço
                    </th>
                    <th className="p-3 w-24 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {schools.map((school) => {
                    const address = school.address;
                    const fullAddress = address
                      ? `${address.street}, ${address.number} ${address.complement}, ${address.neighborhood}, ${address.city} - ${address.state}, ${address.postal_code}`
                      : "Endereço não disponível";

                    return (
                      <tr
                        key={school.id}
                        className="border-b last:border-none even:bg-gray-50 hover:bg-blue-50 transition"
                      >
                        <td className="p-3 items-center gap-2">
                          {school.name}
                        </td>
                        <td className="p-3">{school.cnpj}</td>
                        <td className="p-3 hidden sm:table-cell">
                          {school.phone_number}
                        </td>
                        <td className="p-3 hidden sm:table-cell text-gray-500">
                          {school.email}
                        </td>
                        <td className="p-3 hidden sm:table-cell text-gray-500">
                          {fullAddress}
                        </td>

                        <td className="p-3 whitespace-nowrap text-right">
                          <div className="flex justify-end gap-2">
                            <button
                              title="Visualizar"
                              className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                              <i className="ri-eye-line"></i>
                            </button>
                            <button
                              title="Editar"
                              className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                            >
                              <i className="ri-edit-line"></i>
                            </button>
                            <button
                              title="Excluir"
                              className="p-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* Paginação */}
              <div className="mt-4 flex flex-wrap gap-2 align-middle justify-center">
                <button
                  disabled={pagination.current_page === 1}
                  onClick={() => handlePageChange(pagination.current_page - 1)}
                  className="px-3 py-1 border rounded bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                >
                  &laquo; Anterior
                </button>

                {generatePageNumbers().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(page)}
                    disabled={page === "..."}
                    className={`px-3 py-1 border rounded ${
                      page === currentPage
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  disabled={pagination.current_page === pagination.last_page}
                  onClick={() => handlePageChange(pagination.current_page + 1)}
                  className="px-3 py-1 border rounded bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                >
                  Próximo &raquo;
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
export default ListSchools;
