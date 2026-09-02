import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCurriculum from "./add-new-course/curriculam";
import CourseSettings from "./add-new-course/settings";
import CourseLandingPage from "./add-new-course/course-landing-page";
import { useContext } from "react";
import { InstructorContext } from "@/context/instructor-context";

function CreateNewCourse() {
  const { handleUpload } = useContext(InstructorContext);
  return (
    <div className="w-full mx-auto p-4 md:p-8 space-y-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-lg md:text-xl font-bold">Create New Course</h1>
        <Button
          onClick={() => handleUpload()}
          className="px-6 py-2 w-full sm:w-auto font-medium shadow-sm"
        >
          SUBMIT
        </Button>
      </div>

      <Tabs defaultValue="curriculum" className="flex flex-col w-full">
        <div className="w-full mb-4 overflow-x-auto pb-1">
          <TabsList
            variant="line"
            className="flex w-max min-w-full justify-start sm:justify-center border-b border-gray-200 bg-transparent h-auto p-0"
          >
            <TabsTrigger
              value="curriculum"
              className="text-sm px-3 py-2.5 sm:px-6 shrink-0"
            >
              Curriculum
            </TabsTrigger>
            <TabsTrigger
              value="course-landing-page"
              className="text-sm px-3 py-2.5 sm:px-6 shrink-0"
            >
              Course Landing Page
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="text-sm px-3 py-2.5 sm:px-6 shrink-0"
            >
              Settings
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="mt-4 w-full">
          <TabsContent
            value="curriculum"
            className="w-full focus-visible:outline-none"
          >
            <CourseCurriculum />
          </TabsContent>
          <TabsContent
            value="course-landing-page"
            className="w-full focus-visible:outline-none"
          >
            <CourseLandingPage />
          </TabsContent>
          <TabsContent
            value="settings"
            className="w-full focus-visible:outline-none"
          >
            <CourseSettings />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default CreateNewCourse;
