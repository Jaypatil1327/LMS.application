import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SignIN from "./signin";
import SignUP from "./signup";

function Auth() {
  const [state, setState] = useState("signin");

  function handleTab(value) {
    setState(value);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 items-center border-b border-gray-300 px-4">
        <Link to="/" className="flex items-center gap-2">
          <GraduationCap size={38} />
          <span className="text-2xl font-semibold">LMS</span>
        </Link>
      </header>

      <div className="flex flex-1 items-center justify-center">
        <Tabs value={state} onValueChange={handleTab} className="w-120">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin">
            <SignIN></SignIN>
          </TabsContent>

          <TabsContent value="signup">
            <SignUP></SignUP>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Auth;
