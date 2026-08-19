import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ authenticated, user, element }) {
  const loc = useLocation();

  // Not authenticated

  if (!authenticated) {
    return <Navigate to="/auth"></Navigate>;
  }

  // Normal user +
  if (
    authenticated &&
    user?.role !== "admin" &&
    (loc.pathname.includes("/admin") || loc.pathname.includes("/auth"))
  ) {
    return <Navigate to={"/home"}></Navigate>;
  }
  if (
    authenticated &&
    user.role === "admin" &&
    !loc.pathname.includes("/admin")
  ) {
    return <Navigate to={"/admin"}></Navigate>;
  }

  return <>{element}</>;
}

export default ProtectedRoute;
