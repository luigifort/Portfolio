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
    <Form>
      <div className="flex flex-col  max-w-96">
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Nome"
              name="Nome"
              placeholder=" "
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="company"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Azienda"
              name="Azienda"
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
              type="email"
              placeholder=" "
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="object"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Oggetto"
              name="Oggetto"
              placeholder=" "
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Richiesta"
              name="richiesta"
              placeholder=" "
              value={value}
              onChange={onChange}
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
