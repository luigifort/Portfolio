import { z } from "zod";

export default z.object({
  name: z.string().min(1),
  email: z.email(),
  object: z.string().min(1),
  message: z.string().min(1),
  company: z.string().optional(),
}) satisfies z.ZodType<ContactFormInput>;
