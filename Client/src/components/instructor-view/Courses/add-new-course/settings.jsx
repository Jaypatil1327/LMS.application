import ProgressComponent from "@/components/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InstructorContext } from "@/context/instructor-context";
import { videoUpload } from "@/services/instructor";
import { useContext, useEffect, useState } from "react";

function CourseSettings() {
  const { InsturctorForm } = useContext(InstructorContext);
  const [image, setImage] = useState(null);
  const [progess, setProgess] = useState(0);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const val = InsturctorForm.getValues("image");
    if (val) {
      setImage(val);
    }
  }, [image]);

  async function handleMediaUpload(event) {
    const file = event.target.files[0];
    if (file) {
      try {
        setUploading(true);
        const form = new FormData();
        form.append("file", file);
        const upload = await videoUpload(form, (progess) => {
          setProgess(progess);
        });
        if (upload.status) {
          InsturctorForm.setValue("image", upload.result.url);
          InsturctorForm.setValue("public_id", upload.result.public_id);
          setImage(upload.result.url);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  function handleSubmit(data) {
    setImage(data.image);
  }
  return (
    <Card className={"w-full p-4 space-y-2"}>
      <CardTitle className={" text-lg md:text-2xl"}>Course Settings</CardTitle>
      <CardContent className="flex justify-between items-center gap-2">
        <Label htmlFor={"image"} className={"shrink-0"} accept="image/">
          Select Hero Image
        </Label>
        <Input
          type={"file"}
          accept="image/*"
          onChange={handleMediaUpload}
        ></Input>
        <Button onClick={InsturctorForm.handleSubmit(handleSubmit)}>
          Submit
        </Button>
      </CardContent>
      <CardFooter>
        {uploading && progess < 100 ? (
          <ProgressComponent></ProgressComponent>
        ) : null}
      </CardFooter>
      {image ? <img src={image} alt="cover-image"></img> : null}
    </Card>
  );
}

export default CourseSettings;
