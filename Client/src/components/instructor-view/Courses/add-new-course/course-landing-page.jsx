import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { InstructorContext } from "@/context/instructor-context";
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
        <Input {...register("price")} type="number" placeholder="122"></Input>
        <Label className={"md:text-[1rem]"}>Objective</Label>
        <Textarea
          {...register("ojective")}
          placeholder="Enter objectives of this course"
        ></Textarea>
        <Label className={"md:text-[1rem]"}>Welcome Message</Label>
        <Textarea
          {...register("welcomeMessage")}
          placeholder="Enter welocome message for students"
        ></Textarea>
        <div className="self-end">
          <Button
            onClick={() => {
              setPage((prev) => {
                if (prev + 1 <= 2) return prev + 1;
                return prev;
              });
            }}
          >
            Next
          </Button>
          <Button
            onClick={() => {
              setPage((prev) => {
                if (prev - 1 >= 0) return prev - 1;
                return prev;
              });
            }}
          >
            Previous
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default CourseLandingPage;
