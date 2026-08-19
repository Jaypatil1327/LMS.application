import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import ProtectedRoute from "./protected_route";
import { useContext } from "react";
import { authContext } from "./context/auth-context";

export default function App() {
  const { auth } = useContext(authContext);
  return (
    <Routes>
      <Route
        path="/auth"
        element={
          <ProtectedRoute
            user={auth.data}
            authenticated={auth.authenticated}
            element={<Auth />}
          ></ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
}
