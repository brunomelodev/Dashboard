import { useState } from "react";
import SidebarContext from "./SidebarContext";

// Provider
function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}
export default SidebarProvider;
