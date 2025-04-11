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
  const [isOpen, setIsOpen] = useState(false); //define status do modal

  /** start: form cadastrar */
  const [formData, setFormData] = useState({
    name: "",
    cnpj: "",
    phone_number: "",
    email: "",
    address: {
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
      postal_code: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      await api.post("/schools", formData);
      setIsOpen(false); // fecha o modal
      setFormData({
        name: "",
        cnpj: "",
        phone_number: "",
        email: "",
        address: {
          street: "",
          number: "",
          complement: "",
          neighborhood: "",
          city: "",
          state: "",
          postal_code: "",
        },
      });
      fetchSchools(currentPage, perPage); // atualiza lista
    } catch (error) {
      console.error("Erro ao cadastrar escola:", error);
      alert("Erro ao cadastrar escola. Verifique os dados e tente novamente.");
    }
  };

  /** end: form cadastrar */

  const fetchSchools = useCallback(
    async (page, perPage) => {
      try {
        setLoading(true);
        const response = await api.get("/schools", {
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
    <>
      <section className="p-6 xl:max-w-7xl xl:mx-auto">
        <div className="rounded-2xl bg-white p-6 shadow-md mb-6">
          <div className="overflow-x-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4 sm:gap-2">
              <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                <button
                  className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring-2 ring-blue-300 duration-150 border cursor-pointer rounded-sm border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 py-2 px-3"
                  type="submit"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="px-2">Adicionar</span>
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                <label htmlFor="search" className="text-sm sm:mr-2">
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
                  className="border rounded px-2 py-1 w-full sm:w-64" // ajuste de largura para input
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                <label className="text-sm sm:mr-2">Registros por página:</label>
                <select
                  value={perPage}
                  onChange={(e) => {
                    setPerPage(Number(e.target.value));
                    setCurrentPage(1); // Resetar para a primeira página
                  }}
                  className="border rounded px-2 py-1 w-full sm:w-auto"
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
                    onClick={() =>
                      handlePageChange(pagination.current_page - 1)
                    }
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
                    onClick={() =>
                      handlePageChange(pagination.current_page + 1)
                    }
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

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
          {/* start: Overlay */}
          <div
            className="fixed inset-0 h-full w-full bg-gray-400/50 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          ></div>
          {/* end: Overlay */}

          {/* start: Modal content */}
          <div className="relative z-50 w-full max-w-xl rounded-3xl bg-white p-5 lg:p-10">
            {/* Botão de fechar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-700 sm:right-6 sm:top-6 sm:h-11 sm:w-11"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.04 16.54a1 1 0 0 0 1.42 1.42L12 13.41l4.54 4.54a1 1 0 1 0 1.42-1.42L13.41 12l4.55-4.54a1 1 0 0 0-1.42-1.42L12 10.59 7.46 6.04a1 1 0 0 0-1.42 1.42L10.59 12l-4.55 4.54Z"
                />
              </svg>
            </button>

            <form onSubmit={handleSubmit}>
              <h4 className="mb-6 text-lg font-medium text-gray-800">
                Cadastro da Escola
              </h4>

              <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                <div className="col-span-1">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Nome da Escola"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="col-span-1">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    CNPJ
                  </label>
                  <input
                    type="text"
                    placeholder="00.000.000/0000-00"
                    name="cnpj"
                    value={formData.cnpj}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="col-span-1">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Telefone
                  </label>
                  <input
                    type="text"
                    placeholder="(14) 99999-9999"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="col-span-1">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="email@email.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="col-span-1 sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Rua
                  </label>
                  <input
                    type="text"
                    placeholder="Rua"
                    name="address.street"
                    value={formData.address.street}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="col-span-1">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Número
                  </label>
                  <input
                    type="text"
                    placeholder="(14) 99999-9999"
                    name="address.number"
                    value={formData.address.number}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="col-span-1">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Complemento
                  </label>
                  <input
                    type="text"
                    placeholder="Complemento"
                    name="address.complement"
                    value={formData.address.complement}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="col-span-1">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Bairro
                  </label>
                  <input
                    type="text"
                    placeholder="(14) 99999-9999"
                    name="address.neighborhood"
                    value={formData.address.neighborhood}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="col-span-1">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Complemento
                  </label>
                  <input
                    type="text"
                    placeholder="email@email.com"
                    name="address.city"
                    value={formData.address.city}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="col-span-1">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Estado
                  </label>
                  <input
                    type="text"
                    placeholder="Estado"
                    name="address.state"
                    value={formData.address.state}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="col-span-1">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Cep
                  </label>
                  <input
                    type="text"
                    placeholder="CEP"
                    name="address.postal_code"
                    value={formData.address.postal_code}
                    onChange={handleChange}
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              <div className="mt-6 flex w-full items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Fechar
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm text-white hover:bg-blue-700 disabled:bg-blue-300"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
          {/* end: Modal content */}
        </div>
      )}
    </>
  );
}
export default ListSchools;
