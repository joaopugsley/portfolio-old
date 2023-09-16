import { z } from "zod";

export const MessageSchema = z.object({
  content: z.string().nonempty().max(300),
  isUserMessage: z.boolean()
});

export const MessageArraySchema = z.array(MessageSchema);

export type Message = z.infer<typeof MessageSchema>;