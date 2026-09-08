import ProgressComponent from "@/components/progress";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { InstructorContext } from "@/context/instructor-context";
import { videoUpload } from "@/services/instructor";
import { useContext, useState } from "react";

export default function CourseCurriculum({ setPage }) {
  const { fields, append, InstructorForm, lectures } =
    useContext(InstructorContext);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  function addLecture() {
    const lastIdx = fields.length;
    console.log(lastIdx);
    if (lectures[lastIdx - 1].title !== "") {
      append({
        title: "",
        freePreview: false,
        public_id: "",
        video_url: "",
      });
    }
  }

  async function handleUpload(event, index) {
    try {
      const file = event.target.files[0];
      setUploading(true);
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const result = await videoUpload(formData, setProgress);
        InstructorForm.setValue(
          `lectures.${index}.video_url`,
          result.result.url,
        );
        InstructorForm.setValue(
          `lectures.${index}.public_id`,
          result.result.public_id,
        );
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      uploading(false);
      setProgress(0);
    }
  }
  return (
    <div className="space-y-4 p-4">
      <div className="flex justify-between items-center">
        <h1 className={"text-xl"}>Curriculam</h1>
        <Button disable={uploading.toString()} onClick={addLecture}>
          Add New Lecture
        </Button>
      </div>
      {fields.map((vals, index) => (
        <Card className={"p-4"} key={index}>
          <CardContent className={"space-y-2"}>
            <div className="flex gap-2">
              <Label className={"shrink-0"}>Lecture Title</Label>
              <Input
                {...InstructorForm.register(`lectures.${index}.title`)}
                type={"text"}
                placeholder="enter course title"
              ></Input>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Input
                type={"file"}
                onChange={(event) => handleUpload(event, index)}
              ></Input>
              <Label className={"shrink-0"}>Free Preview</Label>
              <Switch
                {...InstructorForm.register(`lectures.${index}.freePreview`)}
              ></Switch>
            </div>
          </CardContent>
          <CardFooter className={"flex justify-end"}>
            <Button>Delete Lecture</Button>
          </CardFooter>
        </Card>
      ))}
      {uploading && progress < 100 ? (
        <ProgressComponent value={progress}></ProgressComponent>
      ) : null}
      <div className="flex justify-end gap-2">
        <Button
          className={"px-4 py-2"}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
        <Button className={"px-4 py-2"}>Previous</Button>
      </div>
    </div>
  );
}
