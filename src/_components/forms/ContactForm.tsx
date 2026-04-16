"use client";

import { Form } from "@/_components/Form";
import { TextField } from "@/_components/forms/fields/TextField";
import { Button } from "@/_components/Button";
import { Controller, useForm } from "react-hook-form";
import contactSchema from "@/_types/zod/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ContactForm() {
  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm<ContactFormInput>({
    mode: "onChange",
    defaultValues: {
      name: "",
      company: "",
      email: "",
      object: "",
      message: "",
    },
    resolver: zodResolver(contactSchema),
  });

  return (
    <Form
      onSubmit={handleSubmit(
        (data) => {
          console.log("VALID", data);
        },
        (errors) => {
          console.log("ERRORS", errors);
        }
      )}
    >
      <div className="flex flex-col  max-w-96">
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Nome"
              name="name"
              placeholder=" "
              value={value}
              onChange={onChange}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
            />
          )}
        />
        <Controller
          name="company"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Azienda"
              name="company"
              placeholder=" "
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Email"
              name="email"
              placeholder=" "
              value={value}
              onChange={onChange}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          name="object"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Oggetto"
              name="object"
              placeholder=" "
              value={value}
              onChange={onChange}
              isInvalid={!!errors.object}
              errorMessage={errors.object?.message}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Richiesta"
              name="message"
              type="textArea"
              placeholder=" "
              value={value}
              onChange={onChange}
              isInvalid={!!errors.message}
              errorMessage={errors.message?.message}
            />
          )}
        />
      </div>
      <div className="flex gap-4 mt-5">
        <Button type="submit" isDisabled={!isValid || !isDirty}>
          Invia
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
  );
}
