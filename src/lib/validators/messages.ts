import { z } from "zod";

export const roles = ["assistant", "user"] as const;

export const MessageSchema = z.object({
  content: z.string().nonempty().max(300),
  role: z.enum(roles)
});

export const MessageArraySchema = z.array(MessageSchema);

export type Message = z.infer<typeof MessageSchema>;