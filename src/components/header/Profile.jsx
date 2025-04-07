import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useOutsideClick } from "../../hooks/useOutsideClick";

function Profile() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const userMenuRef = useRef(null);

  useOutsideClick(userMenuRef, () => setIsUserMenuOpen(false));

  return (
    <li className="ml-3 relative" ref={userMenuRef}>
      <button
        onClick={() => setIsUserMenuOpen((prev) => !prev)}
        type="button"
        aria-haspopup="true"
        aria-expanded={isUserMenuOpen}
        className="flex items-center"
      >
        <img
          src="https://placehold.co/32x32"
          alt="Foto do usuário"
          className="w-8 h-8 rounded block object-cover align-middle"
        />
      </button>

      <ul
        role="menu"
        aria-label="Menu"
        className={`${
          isUserMenuOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        } absolute right-0 mt-2 shadow-md shadow-black/5 z-30 py-1.5 w-72 sm:w-80 rounded-md bg-white border border-gray-100 max-w-[140px] transform transition-all duration-300 ease-in-out`}
      >
        <li>
          <Link
            to="/"
            className="flex items-center text-[13px] gap-2 py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
          >
            <i className="ri-user-line text-[16px]"></i>
            Perfil
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex items-center text-[13px] gap-2 py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
          >
            <i className="ri-settings-3-line text-[16px]"></i>
            Configurações
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex items-center text-[13px] gap-2 py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
          >
            <i className="ri-logout-box-r-line text-[16px]"></i>
            Logout
          </Link>
        </li>
      </ul>
    </li>
  );
}
export default Profile;
