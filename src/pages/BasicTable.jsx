import { useState } from "react";

function BasicTable() {
  const users = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    company: `Company ${i + 1}`,
    city: `City ${i + 1}`,
    created: `2025-04-${(i % 30) + 1}`.padStart(2, "0"),
    avatar: `User-${i + 1}`,
  }));

  const ITEMS_PER_PAGE = 6;

  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });

  // Filtro por nome
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Ordenação
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const { key, direction } = sortConfig;
    if (!key) return 0;
    if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
    if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedUsers.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const visibleUsers = sortedUsers.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleSort = (key) => {
    setPage(1);
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  const getSortArrow = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === "asc" ? "▲" : "▼";
  };

  return (
    <section className="p-6 xl:max-w-7xl xl:mx-auto">
      <div className="rounded-2xl bg-white p-6 shadow-md mb-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar por nome..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1);
            }}
            className="w-full md:w-1/3 px-4 py-2 border rounded-md text-sm"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="border-b text-gray-700">
              <tr>
                <th className="p-3">Name</th>
                <th
                  className="p-3 cursor-pointer select-none"
                  onClick={() => handleSort("company")}
                >
                  Company {getSortArrow("company")}
                </th>
                <th
                  className="p-3 hidden sm:table-cell cursor-pointer select-none"
                  onClick={() => handleSort("city")}
                >
                  City {getSortArrow("city")}
                </th>
                <th
                  className="p-3 hidden sm:table-cell cursor-pointer select-none"
                  onClick={() => handleSort("created")}
                >
                  Created {getSortArrow("created")}
                </th>
                <th className="p-3 w-24 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b last:border-none even:bg-gray-50 hover:bg-blue-50 transition"
                >
                  <td className="p-3 flex items-center gap-2">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatar}`}
                      alt={user.name}
                      className="w-8 h-8 rounded-full bg-gray-100"
                    />
                    <span>{user.name}</span>
                  </td>
                  <td className="p-3">{user.company}</td>
                  <td className="p-3 hidden sm:table-cell">{user.city}</td>
                  <td className="p-3 hidden sm:table-cell text-gray-500">
                    <small>{user.created}</small>
                  </td>
                  <td className="p-3 whitespace-nowrap text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        title="Visualizar"
                        className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          fill="currentColor"
                        >
                          <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                          <path d="M12,4.5C7,4.5 2.7,7.6 1,12C2.7,16.4 7,19.5 12,19.5C17,19.5 21.3,16.4 23,12C21.3,7.6 17,4.5 12,4.5Z" />
                        </svg>
                      </button>
                      <button
                        title="Editar"
                        className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          fill="currentColor"
                        >
                          <path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9Z" />
                          <path d="M17.66,3L15.13,5.13L18.87,8.87L21.4,6.34C21.78,5.96 21.78,5.32 21.4,4.94L19.06,2.6C18.68,2.22 18.04,2.22 17.66,2.6Z" />
                        </svg>
                      </button>
                      <button
                        title="Excluir"
                        className="p-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          fill="currentColor"
                        >
                          <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9Z" />
                          <path d="M9,8H11V17H9V8ZM13,8H15V17H13V8Z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Paginação */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-500">
              Página {page} de {totalPages}
            </p>
            <div className="flex items-center gap-1 flex-wrap">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 transition"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(
                  (n) =>
                    n === 1 ||
                    n === totalPages ||
                    (n >= page - 2 && n <= page + 2)
                )
                .map((n, i, arr) => (
                  <span key={n} className="flex">
                    {i > 0 && n !== arr[i - 1] + 1 && (
                      <span className="px-1">...</span>
                    )}
                    <button
                      onClick={() => setPage(n)}
                      className={`px-3 py-1 text-sm rounded transition ${
                        n === page
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-blue-100"
                      }`}
                    >
                      {n}
                    </button>
                  </span>
                ))}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 transition"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BasicTable;
