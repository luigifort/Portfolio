"use client";
import { Form } from "@/_components/Form";
import { TextField } from "@/_components/forms/fields/TextField";
import { Button } from "@/_components/Button";

export default function ContactForm() {
  return (
    <Form>
      <div className="flex flex-col  max-w-96">
        <TextField label="Nome" name="Nome" isRequired placeholder=" " />
        <TextField label="Azienda" name="Azienda" placeholder=" " />
        <TextField
          label="Email"
          name="email"
          type="email"
          isRequired
          placeholder=" "
        />
        <TextField label="Oggetto" name="Oggetto" placeholder=" " />
        <TextField label="Richiesta" name="richiesta" placeholder=" " />
      </div>

      <div className="flex gap-4 mt-5">
        <Button type="submit">Invia</Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
  );
}
