import { useSidebar } from "../hooks/useSidebar";
import Notification from "./header/Notification";
import Profile from "./header/Profile";
import Search from "./header/Search";

function Header() {
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <header
      className={`${
        isOpen ? "md:w-[calc(100%-256px)] md:ml-64" : "w-full"
      } bg-gray-50 transition-all`}
    >
      <div className="py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
        <button
          onClick={toggleSidebar}
          type="button"
          className="text-lg text-gray-600"
        >
          <i className="ri-menu-line"></i>
        </button>
        <ul className="flex items-center text-sm ml-4">
          <li className="mr-2">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 font-medium"
            >
              Dashboard
            </a>
          </li>
          <li className="text-gray-600 mr-2 font-medium">/</li>
          <li className="text-gray-600 mr-2 font-medium">Analytics</li>
        </ul>
        <ul className="ml-auto flex items-center">
          {/* start: Search DropDown */}
          <Search />
          {/* end: Search DropDown */}

          {/* start: Notification DropDown */}
          <Notification />
          {/* end: Notification DropDown */}

          {/* start: Profile DropDown */}
          <Profile />
          {/* end: Profile DropDown */}
        </ul>
      </div>
    </header>
  );
}
export default Header;
