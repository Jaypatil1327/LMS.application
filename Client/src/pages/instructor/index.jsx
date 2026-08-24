import Courses from "@/components/instructor-view/Courses";
import Dashboard from "@/components/instructor-view/Dashboard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { authContext } from "@/context/auth-context";
import { Book, ChartNetworkIcon, LogOut } from "lucide-react";
import { useContext, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
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
    <div className="flex flex-col md:flex-row min-h-screen overflow-x-hidden">
      {/* Sidebar / Topbar */}
      <aside className="w-full md:w-64 shadow-sm md:shadow-lg border-b md:border-b-0 md:border-r border-border flex flex-col sticky top-0 z-10 md:min-h-screen">
        <div className="p-4 md:p-6 flex items-center md:items-start justify-between md:justify-start border-b border-border md:border-none">
          <h1 className="text-lg md:text-xl font-bold tracking-tight">
            Instructor View
          </h1>
        </div>

        <div className="flex-1 overflow-x-auto md:overflow-visible">
          <div className="flex flex-row md:flex-col gap-2 p-3 md:p-4 min-w-max md:min-w-0">
            {menuItems.map((vals) => {
              const Icon = vals.icon;
              const isActive = tab === vals.value && vals.value !== "logout";
              return (
                <Button
                  key={vals.value}
                  variant={
                    vals.value === "logout" ? "destructive" : "secondary"
                  }
                  className={`justify-start flex-shrink-0 md:w-full`}
                  onClick={() => {
                    if (vals.value === "logout") handleLogout();
                    else setTab(vals.value);
                  }}
                >
                  <Icon className="mr-2 h-5 w-5" />
                  {vals.name}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="hidden md:flex p-4 mt-auto items-center gap-2">
          <ModeToggle />
          <span className="text-sm font-medium">Toggle Theme</span>
        </div>
        <div className="md:hidden flex p-4 items-center justify-center border-t border-border">
          <ModeToggle />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto overflow-x-hidden">
        {isRoot ? (
          <div className="w-full max-w-7xl mx-auto">
            <Tabs value={tab} onValueChange={setTab} className="w-full">
              <TabsContent
                value="dashboard"
                className="mt-0 focus-visible:outline-none"
              >
                <Dashboard></Dashboard>
              </TabsContent>
              <TabsContent
                value="courses"
                className="mt-0 focus-visible:outline-none"
              >
                <Courses></Courses>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <div className="w-full max-w-7xl mx-auto">
            <Outlet />
          </div>
        )}
      </main>
    </div>
  );
}

export default InstructorPage;
