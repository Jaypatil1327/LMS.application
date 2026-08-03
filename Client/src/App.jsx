import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";

export default function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />}></Route>
    </Routes>
  );
}
