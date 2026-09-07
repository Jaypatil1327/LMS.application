import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCurriculum from "./add-new-course/curriculam";
import CourseSettings from "./add-new-course/settings";
import CourseLandingPage from "./add-new-course/course-landing-page";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useContext, useState } from "react";
import { InstructorContext } from "@/context/instructor-context";

function CreateNewCourse() {
  const { handleSubmit, InstructorForm } = useContext(InstructorContext);
  const [page, setPage] = useState(0);
  return (
    <div className="min-h-screen w-full px-6 py-4">
      <Card className="px-4 py-6 space-y-4">
        <CardHeader className={" flex justify-between items-center"}>
          <CardTitle className="text-2xl">Create New Course</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {page === 0 ? (
            <CourseLandingPage setPage={setPage} />
          ) : page === 1 ? (
            <CourseCurriculum setPage={setPage} />
          ) : (
            <CourseSettings setPage={setPage} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default CreateNewCourse;
