import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import ProtectedRoute from "./components/protected_route";
import { useContext } from "react";
import { authContext } from "./context/auth-context";
import InstructorPage from "./pages/instructor";
import StudentHomePAage from "./pages/student/home";
import StudentLayout from "./components/student-view";
import CreateNewCourse from "./components/instructor-view/Courses/new-course";
import { ThemeProvider } from "next-themes";

export default function App() {
  const { auth } = useContext(authContext);
  return (
    <ThemeProvider attribute={"class"}>
      <Routes>
        <Route
          path="/auth"
          element={
            <ProtectedRoute
              user={auth.data}
              authenticated={auth.authenticated}
              element={<Auth></Auth>}
            ></ProtectedRoute>
          }
        ></Route>
        <Route
          path="/instructor"
          element={
            <ProtectedRoute
              user={auth.data}
              authenticated={auth.authenticated}
              element={<InstructorPage />}
            ></ProtectedRoute>
          }
        ></Route>

        <Route
          path="/instructor/create-new-course"
          element={
            <ProtectedRoute
              user={auth.data}
              authenticated={auth.authenticated}
              element={<CreateNewCourse />}
            ></ProtectedRoute>
          }
        ></Route>

        <Route
          path="/"
          element={
            <ProtectedRoute
              user={auth.data}
              authenticated={auth.authenticated}
              element={<StudentLayout />}
            ></ProtectedRoute>
          }
        >
          <Route path="/home" element={<StudentHomePAage />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
