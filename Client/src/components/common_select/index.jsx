import { Controller } from "react-hook-form";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useContext } from "react";
import { InstructorContext } from "@/context/instructor-context";

function CommonSelect({ label, array, name }) {
  const { InstructorForm } = useContext(InstructorContext);
  return (
    <div className="flex w-full items-center gap-2">
      <Label className="shrink-0">{label}</Label>
      <Controller
        name={name}
        control={InstructorForm.control}
        render={({ field }) => (
          <Select {...field} value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={`Select ${label}`} />
            </SelectTrigger>
            <SelectContent className="w-full">
              <SelectGroup>
                <SelectLabel>{label}</SelectLabel>

                {array.map((value, index) => (
                  <SelectItem value={value.id} key={index}>
                    {value.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      ></Controller>
    </div>
  );
}

export default CommonSelect;
