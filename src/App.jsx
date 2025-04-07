import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarProvider from "./context/SidebarProvider"; //
import Layout from "./layouts/MainLayout";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <SidebarProvider>
      <Router>
        <AppRoutes />
      </Router>
    </SidebarProvider>
  );
}

export default App;
