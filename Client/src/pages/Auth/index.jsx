import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap } from "lucide-react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SignIN from "./signin";
import SignUP from "./signup";
import { authContext } from "@/context/auth-context";
import { ModeToggle } from "@/components/mode-toggle";

function Auth() {
  console.log("auth page");
  const { state, setState } = useContext(authContext);
  function handleTab(value) {
    setState(value);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 lg:h-16 items-center justify-between border-b border-border px-4 lg:px-8 shadow-sm">
        <Link
          to="/"
          className="flex items-center gap-2 transition-transform hover:scale-105"
        >
          <GraduationCap size={28} className="text-primary lg:w-7 lg:h-7" />
          <span className="text-lg font-bold tracking-tight">LMS</span>
        </Link>
        <ModeToggle />
      </header>

      <div className="flex flex-1 items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-sm rounded-2xl shadow-xl p-6 sm:p-7 border border-border">
          <div className="mb-6 flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2">Welcome</h1>
            <p className=" text-center text-xs">
              Sign in or create an account to get started with LMS
            </p>
          </div>
          <Tabs value={state} onValueChange={handleTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 p-1 rounded-lg">
              <TabsTrigger value="signin" className="rounded-md">
                Sign In
              </TabsTrigger>
              <TabsTrigger value="signup" className="rounded-md">
                Sign Up
              </TabsTrigger>
            </TabsList>
            <TabsContent value="signin" className="mt-0">
              <SignIN></SignIN>
            </TabsContent>
            <TabsContent value="signup" className="mt-0">
              <SignUP />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Auth;
