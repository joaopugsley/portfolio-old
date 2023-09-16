import { NextResponse } from "next/server";
import { MessageArraySchema } from "@/lib/validators/messages";
import chatPrompt from "@/helpers/constants/chatPrompt";

type OpenAIResponse = {
  choices: {
    message: {
      content: string
      role: string
    }
  }[]
}

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {

    const parsedMessages = MessageArraySchema.parse(messages);

    const messageHistory = [
      {
        role: "system",
        content: chatPrompt
      },
      ...parsedMessages.map((message) => ({
        role: message.isUserMessage ? 'user' : 'assistant',
        content: message.content
      }))
    ]

    const payload = {
      model: "gpt-3.5-turbo",
      messages: messageHistory,
      temperature: 0.5,
      max_tokens: 200,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    }

    const API_KEY = process.env.OPEN_AI_API_KEY;
    const API_URL = "https://api.openai.com/v1/chat/completions";

    try {

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify(payload)
      });
  
      if(!res.ok) {
        return NextResponse.json({
          error: "Internal server error"
        }, { status: 500 })
      }
  
      const data = (await res.json()) as OpenAIResponse;
  
      return NextResponse.json({
        message: data.choices[0].message.content
      }, { status: 200 })

    } catch(err) {
      return NextResponse.json({
        error: "Internal server error"
      }, { status: 500 })
    }

  } catch(err) {
    return NextResponse.json({
      error: "Bad request."
    }, { status: 400 })
  }

}