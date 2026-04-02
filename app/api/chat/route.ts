import { GoogleGenerativeAI } from "@google/generative-ai";
import { cvText } from "@/data/cv-text";

const SYSTEM_PROMPT = `You are Itai's portfolio assistant. Answer questions about Itai Markovetzky based only on his CV provided below. Be concise and friendly. If asked something not in the CV, say you don't have that information but suggest contacting Itai directly.

CV:
${cvText}`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return Response.json({ error: "Message is required" }, { status: 400 });
    }

    if (message.length > 500) {
      return Response.json({ error: "Message too long" }, { status: 400 });
    }

    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "Chatbot not configured" },
        { status: 503 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    const result = await model.generateContent(message.trim());

    const text = result.response.text();
    return Response.json({ reply: text });
  } catch {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
