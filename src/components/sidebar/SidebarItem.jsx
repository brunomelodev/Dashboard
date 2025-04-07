import { NavLink } from "react-router-dom";

function SidebarItem({ to, icon, label, onClickMobile }) {
  const handleClick = () => {
    if (window.innerWidth < 768 && onClickMobile) {
      onClickMobile();
    }
  };

  return (
    <li className="mb-1">
      <NavLink
        to={to}
        onClick={handleClick}
        className={({ isActive }) =>
          `flex items-center py-2 px-4 text-sm rounded-md ${
            isActive
              ? "bg-gray-800 text-white"
              : "text-gray-300 hover:bg-gray-950 hover:text-gray-100"
          }`
        }
      >
        <i className={`${icon} mr-3 text-lg`}></i>
        {label}
      </NavLink>
    </li>
  );
}

export default SidebarItem;
