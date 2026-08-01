import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text, style } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "No text provided" }, { status: 400 });
    }

    const stylePrompts: Record<string, string> = {
      teen: "Rewrite the following news article in a clear, simple, and engaging way that a 15-year-old teenager can easily understand. Use friendly language, short sentences, and explain any complex ideas.",
      neutral: "Rewrite the following news article in a completely neutral and factual tone. Remove any emotional or biased language. Focus only on the key facts.",
      story: "Turn the following news article into an engaging short story narrative. Make it flow like a story while keeping the important facts accurate.",
    };

    const systemPrompt = stylePrompts[style] || stylePrompts.teen;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: text },
        ],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      return NextResponse.json({ error: "Groq API error" }, { status: 500 });
    }

    const narrative = data.choices[0]?.message?.content || "No response generated.";

    return NextResponse.json({ narrative });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}