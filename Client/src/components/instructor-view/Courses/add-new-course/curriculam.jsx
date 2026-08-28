import ProgressComponent from "@/components/progress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import VideoPlayer from "@/components/VideoPlayer";
import { initialCourseCurriculam } from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { deleteMedia, videoUpload } from "@/services/instructor";
import { useContext, useState } from "react";
import { Controller } from "react-hook-form";

function CourseCurriculum() {
  const { MediaForm, Lectures } = useContext(InstructorContext);
  const { fields, append } = Lectures;
  const { register, setValue, control, getValues } = MediaForm;

  const [uploading, setUploading] = useState(false);
  const [progess, setProgress] = useState(0);
  const [videoUrl, setVideoUrl] = useState([""]);

  async function handleFile(event, index) {
    const file = event.target.files[0];

    if (!file) return;

    try {
      setUploading(true);
      setProgress(0);

      const video = new FormData();
      video.append("file", file);

      const data = await videoUpload(video, (progress) => {
        setProgress(progress);
      });

      if (data.status) {
        setValue(`lectures.${index}.video_url`, data.result.url);

        setValue(`lectures.${index}.public_id`, data.result.public_id);

        setVideoUrl((prev) => {
          const updated = [...prev];
          updated[index] = data.result.url;
          return updated;
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  }

  function handleSubmit(data) {
    const arr = data.lectures;
    const n = arr.length - 1;
    if (arr[n].title === "" && arr[n].public_id === "") return;
    append(initialCourseCurriculam);
    setVideoUrl((prev) => [...prev, ""]);
  }

  async function handleReplace(index) {
    try {
      const publicId = getValues(`lectures.${index}.public_id`);
      const status = await deleteMedia(publicId);
      if (status) {
        setValue(`lecture.${index}.video_url`, "");
        setVideoUrl((prev) => {
          const updated = [...prev];
          updated[index] = "";
          return updated;
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <Card className="flex flex-col space-y-4 px-4 py-6 shadow-xl">
      <div className="flex justify-between items-center">
        <h1>Create Course Curriculum</h1>
        <Button
          onClick={MediaForm.handleSubmit(handleSubmit)}
          disable={uploading.toString()}
        >
          Add Course
        </Button>
      </div>
      <div className="space-y-4">
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
              {videoUrl[index] !== "" ? (
                <div className="flex flex-col gap-4">
                  <VideoPlayer videoUrl={videoUrl[index]} />
                  <div className="flex justify-center items-center gap-4">
                    <Button
                      variant="outline"
                      onClick={() => handleReplace(index)}
                    >
                      Replace
                    </Button>
                    <Button variant="destructive">Delete</Button>
                  </div>
                </div>
              ) : (
                <Input
                  accept="video/*"
                  type={"file"}
                  onChange={(event) => handleFile(event, index)}
                ></Input>
              )}
            </div>
          </Card>
        ))}
        {uploading && progess < 100 ? (
          <ProgressComponent value={progess}></ProgressComponent>
        ) : null}
      </div>
    </Card>
  );
}

export default CourseCurriculum;
