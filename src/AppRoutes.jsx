import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Initial from "./pages/Initial";
import BasicForm from "./pages/BasicForm";
import BasicTable from "./pages/BasicTable";
import ModalForm from "./pages/ModalForm";
import Login from "./pages/Login";
import AuthProvider from "./context/AuthProvider";
import ProtectedRoute from "./routes/ProtectedRoute";
import ListSchools from "./pages/ListSchools";

function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        {/* Rotas com layout principal e protegidas */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Initial />} />
          <Route path="/schools" element={<ListSchools />} />
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
    </AuthProvider>
  );
}

export default AppRoutes;
