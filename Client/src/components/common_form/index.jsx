import { Controller } from "react-hook-form";
import { Card } from "../ui/card";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Component } from "react";
import { Button } from "../ui/button";

function Common_Form({
  formConfig,
  form,
  handleSubmit,
  buttonText = "Submit",
}) {
  return (
    <Card className="p-4">
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FieldGroup>
          {formConfig.map((item) => {
            const Component = item.component;

            return (
              <Controller
                key={item.name}
                name={item.name}
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel className={"font-semibold"}>
                      {item.label}
                    </FieldLabel>

                    <Component
                      {...field}
                      type={item.type}
                      placeholder={item.placeholder}
                    />

                    {fieldState.error && (
                      <FieldError>{fieldState.error.message}</FieldError>
                    )}
                  </Field>
                )}
              />
            );
          })}
        </FieldGroup>
        <Button type="submit" className={"w-full"}>
          {buttonText}
        </Button>
      </form>
    </Card>
  );
}

export default Common_Form;
