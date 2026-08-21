import Courses from "@/components/instructor-view/Courses";
import Dashboard from "@/components/instructor-view/Dashboard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { authContext } from "@/context/auth-context";
import { Book, ChartNetworkIcon, LogOut } from "lucide-react";
import { useContext, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

function InstructorPage() {
  const { auth, setAuth } = useContext(authContext);
  const [tab, setTab] = useState("dashboard");
  const location = useLocation();
  const isRoot = location.pathname === "/instructor";

  const menuItems = [
    {
      name: "Dashboard",
      value: "dashboard",
      icon: ChartNetworkIcon,
    },
    {
      name: "Courses",
      value: "courses",
      icon: Book,
    },
    {
      name: "Logout",
      value: "logout",
      icon: LogOut,
    },
  ];

  function handleLogout() {
    sessionStorage.clear();
    setAuth({
      authenticated: false,
      data: null,
    });
  }
  return (
    <div className="min-w-screen flex justify-start min-h-screen bg-gray-100">
      <aside className="min-h-screen min-w-60 flex flex-col space-y-2 bg-gray-50 p-4 border-r-2 shadow-2xl">
        <h1 className="text-2xl font-semibold text-start">Instructor View</h1>
        <div className="flex flex-col gap-2">
          {menuItems.map((vals) => {
            const Icon = vals.icon;
            return (
              <Button
                key={vals.value}
                variant="outline"
                onClick={() => {
                  if (vals.value === "logout") handleLogout();
                  else setTab(vals.value);
                }}
              >
                <span className="mr-auto flex gap-2">
                  <Icon></Icon> {vals.name}
                </span>
              </Button>
            );
          })}
        </div>
      </aside>
      <main className="flex-1 p-2">
        {isRoot ? (
          <div>
            <Tabs value={tab} onValueChange={setTab}>
              <TabsContent value="dashboard">
                <Dashboard></Dashboard>
              </TabsContent>
              <TabsContent value="courses">
                <Courses></Courses>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}

export default InstructorPage;
