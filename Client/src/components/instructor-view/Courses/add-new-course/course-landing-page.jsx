import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { InstructorContext } from "@/context/instructor-context";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";

function CourseLandingPage({ setPage, page }) {
  const { InstructorForm } = useContext(InstructorContext);
  const { register } = InstructorForm;
  return (
    <Card className={"mx-auto w-2/3 flex justify-center items-center "}>
      <CardContent className={"w-full flex flex-col gap-4"}>
        <Label className={"md:text-[1rem]"}>Title</Label>
        <Input {...register("title")} placeholder="Enter Title"></Input>
        <Label className={"md:text-[1rem]"}>Description</Label>
        <Textarea
          {...register("description")}
          placeholder="Enter Description"
        ></Textarea>
        <Label className="md:text-[1rem]">Price</Label>
        <Input
          {...register("pricing")}
          type="number"
          placeholder="enter course price"
        ></Input>
        <Label className={"md:text-[1rem]"}>Objective</Label>
        <Textarea
          {...register("objectives")}
          placeholder="Enter objectives of this course"
        ></Textarea>
        <Label className={"md:text-[1rem]"}>Welcome Message</Label>
        <Textarea
          {...register("welcomeMessage")}
          placeholder="Enter welocome message for students"
        ></Textarea>
        <div className="self-end">
          <Button
            className={"px-8 py-2"}
            onClick={() => {
              setPage((prev) => {
                if (prev + 1 <= 2) return prev + 1;
                return prev;
              });
            }}
          >
            NEXT
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default CourseLandingPage;
