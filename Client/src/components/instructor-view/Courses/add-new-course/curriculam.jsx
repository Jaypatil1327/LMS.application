import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { initialCourseCurriculam } from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { videoUpload } from "@/services/instructor";
import { useContext } from "react";
import { Controller } from "react-hook-form";

function CourseCurriculum() {
  const { MediaForm, Lectures } = useContext(InstructorContext);
  const { fields, append, remove } = Lectures;
  const { register, setValue, control } = MediaForm;

  async function handleFile(event, index) {
    const file = event.target.files[0];
    if (!file) return;
    else {
      const video = new FormData();
      video.append("file", file);
      const data = await videoUpload(video);
      if (data.status) {
        setValue(`lectures.${index}.video_url`, data.result.url);
        setValue(`lectures.${index}.public_id`, data.result.public_id);
      }
    }
  }

  function handleSubmit(data) {
    console.log(data);
    const arr = data.lectures;
    const n = arr.length - 1;
    if (arr[n].title === "" && arr[n].public_id === "") return;
    append(initialCourseCurriculam);
  }

  return (
    <Card className="flex flex-col space-y-4 px-4 py-6 shadow-xl">
      <div className="flex justify-between items-center">
        <h1>Create Course Curriculum</h1>
        <Button onClick={MediaForm.handleSubmit(handleSubmit)}>
          Add Course
        </Button>
      </div>
      <div>
        {fields.map((field, index) => (
          <Card key={field.id} className="flex flex-col px-4 py-2">
            <div className="flex items-center justify-start gap-4">
              <Label
                htmlFor={`lectures.${index}.title`}
                className={"shrink-0 font-semibold"}
              >
                Enter Title
              </Label>
              <Input
                {...register(`lectures.${index}.title`)}
                id={`lectures.${index}.title`}
                placeholder="Enter Title"
              ></Input>
              <Controller
                name={`lectures.${index}.freePreview`}
                control={control}
                render={({ field }) => (
                  <Switch
                    id={`freePreview-${index}`}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label
                id={`lectures.${index}.freePreview`}
                className={"shrink-0 font-semibold"}
              >
                Free Preview
              </Label>
            </div>
            <div className="flex gap-4">
              <Input
                accept="video/*"
                type={"file"}
                onChange={(event) => handleFile(event, index)}
              ></Input>
              <Button variant="destructive">Remove</Button>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}

export default CourseCurriculum;
