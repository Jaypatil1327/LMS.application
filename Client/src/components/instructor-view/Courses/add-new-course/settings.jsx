import CommonSelect from "@/components/common_select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  courseCategories,
  courseLevelOptions,
  languageOptions,
} from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { deleteMedia, videoUpload } from "@/services/instructor";
import { useContext, useState } from "react";

function CourseSettings() {
  const { InstructorForm, handleSubmit } = useContext(InstructorContext);
  const [uploading, setUploading] = useState(false);
  const watchImage = InstructorForm.watch("image");
  console.log(watchImage);
  async function handleUpload(event) {
    try {
      const file = event.target.files[0];
      if (file) {
        if (watchImage) {
          await deleteMedia(InstructorForm.getValues("public_id"));
        }
        const formData = new FormData();
        formData.append("file", file);

        const result = await videoUpload(formData);
        InstructorForm.setValue("image", result.result.url);
        InstructorForm.setValue("public_id", result.result.public_id);
      }
    } catch (error) {}
  }

  return (
    <form onSubmit={InstructorForm.handleSubmit(handleSubmit)} className="p-4">
      <Card className={"mx-auto max-w-1/2 flex justify-start items-center"}>
        <CardTitle className={"text-xl"}>Course Configuration</CardTitle>
        <CardContent className={"w-full flex flex-col self-start gap-4"}>
          <CommonSelect
            name="category"
            label={"Category"}
            array={courseCategories}
          ></CommonSelect>
          <CommonSelect
            name="level"
            label={"Level"}
            array={courseLevelOptions}
          ></CommonSelect>
          <CommonSelect
            name="primaryLanguage"
            label={"Language"}
            array={languageOptions}
          ></CommonSelect>
          <CommonSelect
            name="subtitle"
            label={"Subtitle"}
            array={languageOptions}
          ></CommonSelect>
          <div className="flex gap-2">
            <Label className="shrink-0" htmlFor="CoverImg">
              Upload Cover Image
            </Label>
            <Input id="CoverImg" type={"file"} onChange={handleUpload}></Input>
          </div>
          {watchImage !== "" && (
            <div className="mt-2 flex h-40 w-full items-center justify-center overflow-hidden rounded-md border bg-muted">
              <img
                src={watchImage}
                alt="Course cover preview"
                className="h-full w-full object-contain"
              />
            </div>
          )}
        </CardContent>
        <CardFooter className={"w-full"}>
          <Button
            className={"w-full"}
            type="submit"
            disable={uploading.toString()}
          >
            Upload Course
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default CourseSettings;
