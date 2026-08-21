import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCurriculum from "./add-new-course/curriculam";
import CourseSettings from "./add-new-course/settings";
import CourseLandingPage from "./add-new-course/course-landing-page";

function CreateNewCourse() {
  return (
    <div className="min-h-screen p-4 space-y-4">
      <div className="flex justify-between items-start">
        <h1 className="text-xl font-bold">Create new Course</h1>
        <Button className={"px-4 py-2"}>SUBMIT</Button>
      </div>
      <Card>
        <div>
          <Tabs
            defaultValue="curriculum"
            className={"flex justify-center items-center gap-4"}
          >
            <TabsList variant="line">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="course-landing-page">
                Course-landing-page
              </TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="curriculum">
              <CourseCurriculum></CourseCurriculum>
            </TabsContent>
            <TabsContent value="course-landing-page">
              <CourseLandingPage />
            </TabsContent>
            <TabsContent value="settings">
              <CourseSettings></CourseSettings>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  );
}

export default CreateNewCourse;
