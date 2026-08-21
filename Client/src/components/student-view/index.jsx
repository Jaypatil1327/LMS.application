import { Outlet } from "react-router-dom";

function StudentLayout() {
  return (
    <div>
      <h1>Student layout</h1>

      <Outlet />
    </div>
  );
}

export default StudentLayout;
