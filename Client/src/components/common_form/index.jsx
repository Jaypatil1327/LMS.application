import { Controller } from "react-hook-form";
import { Card } from "../ui/card";
import { Field, FieldGroup, FieldLabel, FieldError } from "../ui/field";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function Common_Form({
  formConfig,
  form,
  handleSubmit,
  loading,
  buttonText = "Submit",
}) {
  return (
    <Card className="p-4 sm:p-6 w-full shadow-sm border border-gray-100">
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-5 w-full"
      >
        <FieldGroup className="w-full">
          {formConfig.map((item) => {
            return (
              <Controller
                key={item.name}
                name={item.name}
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field className="w-full">
                    <FieldLabel className="font-semibold break-words whitespace-normal text-left mb-1">
                      {item.label}
                    </FieldLabel>

                    {item.type === "select" ? (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder={item.placeholder} />
                        </SelectTrigger>

                        <SelectContent>
                          {item.options.map((ops) => (
                            <SelectItem value={ops.id} key={ops.id}>
                              {ops.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <item.component
                        type={item.type}
                        placeholder={item.placeholder}
                        className="w-full"
                        {...field}
                      />
                    )}

                    {fieldState.error && (
                      <FieldError>{fieldState.error.message}</FieldError>
                    )}
                  </Field>
                )}
              />
            );
          })}
        </FieldGroup>

        <Button
          type="submit"
          className="w-full mt-4 h-11 text-base font-medium"
        >
          {loading ? <Spinner className="mr-2" /> : null}
          {loading ? "Submitting..." : buttonText}
        </Button>
      </form>
    </Card>
  );
}

export default Common_Form;
