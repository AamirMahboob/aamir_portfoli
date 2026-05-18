import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const DEFAULT_MODEL = "gemini-2.5-flash";

const SYSTEM_CONTEXT = `You are Aamir Mahboob's AI portfolio assistant.

About Aamir:
- Full Stack Developer
- React.js and Next.js Developer
- Builds modern UI/UX websites
- Skilled in TypeScript, Tailwind CSS, Node.js
- Learning FastAPI and AI agents

Rules:
- Keep answers short (2–4 sentences unless asked for detail)
- Be professional and friendly
- Only answer questions about Aamir, his skills, services, and portfolio
- If unsure, suggest using the contact form on the site`;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY?.trim();

    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "Gemini API key is not configured." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const userMessage =
      typeof body.message === "string" ? body.message.trim() : "";

    if (!userMessage) {
      return NextResponse.json(
        { success: false, message: "Message is required." },
        { status: 400 }
      );
    }

    if (userMessage.length > 2000) {
      return NextResponse.json(
        { success: false, message: "Message is too long." },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const modelName = process.env.GEMINI_MODEL?.trim() || DEFAULT_MODEL;

    const model = genAI.getGenerativeModel({
      model: modelName,
      systemInstruction: SYSTEM_CONTEXT,
    });

    const result = await model.generateContent(userMessage);
    const text = result.response.text();

    if (!text) {
      return NextResponse.json(
        { success: false, message: "Empty response from AI." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      response: text,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error";

    console.error("[/api/chat]", message);

    const isModelError =
      message.includes("404") || message.includes("not found");

    return NextResponse.json(
      {
        success: false,
        message: isModelError
          ? "AI model unavailable. Check GEMINI_MODEL in .env.local."
          : "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
