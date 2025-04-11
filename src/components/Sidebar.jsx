import SidebarItem from "./sidebar/SidebarItem";
import SidebarDropdown from "./sidebar/SidebarDropdown";
import { useEffect, useState } from "react";
import { useSidebar } from "../hooks/useSidebar";

const menuItems = [
  { type: "link", label: "Dashboard", to: "/", icon: "ri-home-2-line" },
  { type: "link", label: "Schools", to: "schools", icon: "ri-school-line" },
  {
    type: "dropdown",
    label: "Básico",
    icon: "ri-instance-line",
    items: [
      { label: "Formulários", to: "/forms" },
      { label: "Tabelas", to: "/tables" },
      { label: "Modal", to: "/modals" },
    ],
  },
  {
    type: "dropdown",
    label: "Login",
    icon: "ri-flashlight-line",
    items: [{ label: "Login 01", to: "/login" }],
  },
  {
    type: "link",
    label: "Configurações",
    to: "/settings",
    icon: "ri-settings-2-line",
  },
];

function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar(
    window.innerWidth < 768 ? "false" : "true"
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // 📱 Detecta mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile && isOpen) toggleSidebar(); // fecha se for mobile
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, toggleSidebar]);

  return (
    <>
      {/* 🔳 Overlay mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`w-64 fixed top-0 left-0 h-full bg-gray-900 p-4 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a
          href="#"
          className="flex items-center pb-4 border-b border-b-gray-800"
        >
          <img
            src="https://placehold.co/32x32"
            alt="Logo"
            className="w-8 h-8 rounded object-cover"
          />
          <span className="text-lg font-bold text-white ml-3">Logo</span>
        </a>

        <nav>
          <ul className="mt-4">
            {menuItems.map((item, idx) =>
              item.type === "link" ? (
                <SidebarItem
                  key={idx}
                  to={item.to}
                  icon={item.icon}
                  label={item.label}
                  onClickMobile={isMobile ? toggleSidebar : undefined}
                />
              ) : (
                <SidebarDropdown
                  key={idx}
                  icon={item.icon}
                  title={item.label}
                  items={item.items}
                  onClickMobile={isMobile ? toggleSidebar : undefined}
                />
              )
            )}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
