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
    <Card className="p-4">
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FieldGroup>
          {formConfig.map((item) => {
            return (
              <Controller
                key={item.name}
                name={item.name}
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel className="font-semibold">
                      {item.label}
                    </FieldLabel>

                    {item.type === "select" ? (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
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

        <Button type="submit" className="w-full">
          {loading ? <Spinner /> : buttonText}
        </Button>
      </form>
    </Card>
  );
}

export default Common_Form;
