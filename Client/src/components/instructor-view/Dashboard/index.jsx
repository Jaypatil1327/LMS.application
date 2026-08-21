import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  Table,
  TableCaption,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
} from "../../ui/table";
import { Edit, SquarePen } from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-2 space-y-4 w-full">
      <h1 className="text-2xl text-start font-semibold">Courses</h1>

      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="font-bold">All Courses</CardTitle>

          <Button onClick={() => navigate("/instructor/create-new-course")}>
            Create New Course
          </Button>
        </CardHeader>

        <CardContent className="w-full">
          <div>
            <Table className={"overflow-hidden"}>
              <TableCaption>
                List of your courses and their performance.
              </TableCaption>

              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%]">Courses</TableHead>
                  <TableHead className="w-[20%]">Students</TableHead>
                  <TableHead className="w-[20%]">Revenue</TableHead>
                  <TableHead className="w-[20%] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow className="font-medium">
                  <TableCell className="text-left">
                    Full Stack Web Development
                  </TableCell>

                  <TableCell>120</TableCell>

                  <TableCell>$250.00</TableCell>

                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button className="h-9 w-9 p-0" variant="outline">
                        <SquarePen className="h-4 w-4" />
                      </Button>

                      <Button className="h-9 w-9 p-0" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;
