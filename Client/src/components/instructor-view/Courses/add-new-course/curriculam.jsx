import ProgressComponent from "@/components/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { InstructorContext } from "@/context/instructor-context";
import { videoUpload } from "@/services/instructor";
import { useContext, useState } from "react";

export default function CourseCurriculum({ setPage }) {
  const [file, setFile] = useState(null);
  const [uploading, setUplading] = useState(false);
  const [progess, setProgess] = useState(0);

  const { fields, remove, append, InstructorForm } =
    useContext(InstructorContext);

  function addLecture() {
    const status = fields[0];
    console.log(fields);
    append({
      title: "",
      freePreview: false,
      public_id: "",
      video_url: "",
      submitted: false,
    });
  }

  async function handleSubmit(index) {
    console.log(index);
    try {
      setUplading(true);

      if (!file) {
        throw new Error("File does not exist");
      }

      const formData = new FormData();
      formData.append("file", file);

      const data = await videoUpload(formData, setProgess);

      if (data) {
        InstructorForm.setValue(`lectures.${index}.video_url`, data.result.url);

        InstructorForm.setValue(
          `lectures.${index}.public_id`,
          data.result.public_id,
        );

        InstructorForm.setValue(`lectures.${index}.submitted`, true);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setUplading(false);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex text-xl font-bold justify-between">
        <h1>Curriculam</h1>
        <Button onClick={() => addLecture()}>Add Lecture</Button>
      </div>
      {fields.map((lec, index) => (
        <Card key={index}>
          <CardContent className={"flex flex-col gap-4 p-4"}>
            <div className="flex gap-4">
              <Label className={"font-semibold"}>Title</Label>
              <Input
                {...InstructorForm.register(`lectures.${index}.title`)}
                placeholder="Enter Lecture Title"
              ></Input>
            </div>
            <div className="flex justify-center items-center gap-4 px-4 py-2">
              <Input
                type={"file"}
                accept="video/*"
                onChange={(data) => {
                  setFile(data.target.files[0]);
                }}
              ></Input>
              <div className="flex gap-4">
                <Label className={"shrink-0 "}>Free Preview</Label>
                <Switch
                  {...InstructorForm.register(`lectures.${index}.freePrview`)}
                  defaultChecked={false}
                ></Switch>
              </div>
            </div>
            <div className="flex justify-between gap-4">
              {uploading && progess <= 100 ? (
                <ProgressComponent value={progess}></ProgressComponent>
              ) : null}
              <div className="flex gap-4 mx-auto">
                <Button variant="outline" onClick={() => handleSubmit(index)}>
                  Submit
                </Button>
                <Button variant="destructive">Remove</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="flex justify-end gap-2">
        <Button
          className={"px-4 py-2"}
          onClick={() => {
            setPage((prev) => {
              if (prev + 1 <= 2) return prev + 1;
              else prev;
            });
          }}
        >
          Next
        </Button>
        <Button
          onClick={() => {
            setPage((prev) => {
              if (prev - 1 >= 0) return prev - 1;
              else prev;
            });
          }}
        >
          Previous
        </Button>
      </div>
    </div>
  );
}
