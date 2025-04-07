import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

function SidebarDropdown({ icon, title, items, onClickMobile }) {
  const location = useLocation();
  const isActive = items.some((item) => location.pathname === item.to);
  const [open, setOpen] = useState(isActive); // abrir se um dos filhos estiver ativo

  const handleItemClick = () => {
    if (window.innerWidth < 768 && onClickMobile) {
      onClickMobile();
    }
  };

  return (
    <li className="mb-1">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center w-full py-2 px-4 text-left text-sm rounded-md ${
          isActive
            ? "bg-gray-800 text-white"
            : "text-gray-300 hover:bg-gray-950 hover:text-gray-100"
        }`}
      >
        <i className={`${icon} mr-3 text-lg`}></i>
        <span>{title}</span>
        <i
          className={`ri-arrow-right-s-line ml-auto transition-transform ${
            open ? "rotate-90" : ""
          }`}
        ></i>
      </button>

      {open && (
        <ul className="pl-7 mt-2">
          {items.map((item, idx) => (
            <li key={idx} className="mb-4">
              <NavLink
                to={item.to}
                onClick={handleItemClick}
                className={({ isActive }) =>
                  `flex items-center text-sm hover:text-gray-100 ${
                    isActive ? "text-white" : "text-gray-300"
                  } before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default SidebarDropdown;
