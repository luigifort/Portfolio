import { z } from "zod";

export default z.object({
  name: z.string().min(1, "Nome obbligatorio"),
  email: z
    .string()
    .min(1, "Email obbligatoria")
    .refine((email) => /^\S+@\S+\.\S+$/.test(email), "Email non valida"),
  object: z.string().min(1, "Oggetto obbligatorio"),
  message: z.string().min(1, "Richiesta obbligatoria"),
  company: z.string().optional(),
}) satisfies z.ZodType<ContactFormInput>;
