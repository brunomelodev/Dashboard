import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Initial from "./pages/Initial";
import BasicForm from "./pages/BasicForm";
import BasicTable from "./pages/BasicTable";
import ModalForm from "./pages/ModalForm";
import Login from "./pages/Login";

function AppRoutes() {
  return (
    <Routes>
      {/* Rotas com layout principal */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Initial />} />
        <Route path="/forms" element={<BasicForm />} />
        <Route path="/tables" element={<BasicTable />} />
        <Route path="/modals" element={<ModalForm />} />
        <Route path="/settings" element={<h1>Settings</h1>} />
      </Route>

      {/* Rotas com layout de autenticação */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Página 404 */}
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
}

export default AppRoutes;
