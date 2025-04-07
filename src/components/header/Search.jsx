import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useOutsideClick } from "../../hooks/useOutsideClick";

function Search() {
  const recentItems = [
    {
      title: "Título",
      description: "Descrição",
      img: "https://placehold.co/32x32",
      link: "/",
    },
    {
      title: "Título",
      description: "Descrição",
      img: "https://placehold.co/32x32",
      link: "/",
    },
    {
      title: "Título",
      description: "Descrição",
      img: "https://placehold.co/32x32",
      link: "/",
    },
    {
      title: "Título",
      description: "Descrição",
      img: "https://placehold.co/32x32",
      link: "/settings",
    },
  ];

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchRef = useRef(null);

  useOutsideClick(searchRef, () => setIsSearchOpen(false));

  return (
    <li className="mr-1 relative" ref={searchRef}>
      <button
        type="button"
        aria-label="Pesquisar"
        aria-expanded={isSearchOpen}
        onClick={() => setIsSearchOpen((prev) => !prev)}
        className="text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600"
      >
        <i className="ri-search-line"></i>
      </button>
      <div
        className={`${
          isSearchOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } absolute right-0 mt-2 shadow-md shadow-black/5 z-30 max-w-xs w-72 sm:w-80 md:w-96 bg-white rounded-md border border-gray-100 transition-all duration-300 ease-in-out`}
      >
        <form action="" className="p-4 border-b border-b-gray-100">
          <div className="relative w-full">
            <input
              type="text"
              aria-label="Campo de busca"
              placeholder="Procurar..."
              className="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
            />
            <i className="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"></i>
          </div>
        </form>
        <div className="mt-3 mb-2">
          <div className="text-[13px] font-medium text-gray-400 ml-4 mb-2">
            Recentes
          </div>
          <ul className="max-h-64 overflow-y-auto">
            {recentItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.link}
                  className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                >
                  <img
                    src={item.img}
                    alt={`Imagem de ${item.title}`}
                    className="w-8 h-8 rounded object-cover"
                  />
                  <div className="ml-2">
                    <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-gray-400">
                      {item.description}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default Search;
