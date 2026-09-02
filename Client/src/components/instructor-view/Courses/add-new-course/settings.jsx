import ProgressComponent from "@/components/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InstructorContext } from "@/context/instructor-context";
import { deleteMedia, videoUpload } from "@/services/instructor";
import { useContext, useEffect, useState } from "react";

function CourseSettings() {
  const { InsturctorForm } = useContext(InstructorContext);
  const [image, setImage] = useState(null);
  const [progess, setProgess] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);

  function handleValueChange(event) {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    }
  }

  async function handleSubmit() {
    try {
      setUploading(true);
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const res = await videoUpload(formData, (progess) => {
          setProgess(progess);
        });

        if (image) {
          const id = InsturctorForm.getValues("public_id");
          await deleteMedia(id);
        }

        InsturctorForm.setValue("image", res.result.url);
        InsturctorForm.setValue("public_id", res.result.public_id);
        setImage(res.result.url);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setUploading(false);
    }
  }

  useEffect(() => {
    const val = InsturctorForm.getValues("image");
    if (val) {
      setImage(val);
    }
  }, [image]);

  return (
    <Card className={"w-full p-4 space-y-2"}>
      <CardTitle className={" text-lg md:text-2xl"}>Course Settings</CardTitle>
      <CardContent className="flex justify-between items-center gap-2">
        <Label htmlFor={"image"} className={"shrink-0"} accept="image/">
          Select Hero Image
        </Label>
        <Input
          type={"file"}
          accept="images/*"
          onChange={handleValueChange}
        ></Input>

        <Button variant="outline" onClick={handleSubmit}>
          Upload
        </Button>
      </CardContent>
      <CardFooter>
        {uploading && progess < 100 ? (
          <ProgressComponent></ProgressComponent>
        ) : null}
      </CardFooter>
      {image ? (
        <img
          src={image}
          alt="cover-image"
          className="w-[400px] h-[400px]"
        ></img>
      ) : null}
    </Card>
  );
}

export default CourseSettings;
