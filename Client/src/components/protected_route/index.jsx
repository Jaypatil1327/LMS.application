import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ authenticated, user, element }) {
  const loc = useLocation();
  // Not authenticated
  console.log(loc.pathname, authenticated, "protected route");
  if (!authenticated && !loc.pathname.includes("/auth")) {
    return <Navigate to="/auth"></Navigate>;
  }

  // Normal user + not instructor
  if (
    authenticated &&
    user?.role !== "admin" &&
    (loc.pathname.includes("/instructor") || loc.pathname.includes("/auth"))
  ) {
    return <Navigate to={"/home"}></Navigate>;
  }

  // instructor and trying to load user page
  if (
    authenticated &&
    user.role === "admin" &&
    !loc.pathname.includes("/instructor")
  ) {
    return <Navigate to={"/instructor"}></Navigate>;
  }
  return <>{element}</>;
}

export default ProtectedRoute;
