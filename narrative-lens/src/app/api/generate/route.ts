import { NextResponse } from "next/server";

const MAX_CHARS = 4000;

const stylePrompts: Record<string, string> = {
  teen: "Rewrite the following news article in a clear, simple, and engaging way that a 15-year-old teenager can easily understand. Use friendly language, short sentences, and explain any complex ideas.",
  neutral: "Rewrite the following news article in a completely neutral and factual tone. Remove any emotional or biased language. Focus only on the key facts.",
  story: "Turn the following news article into an engaging short story narrative. Make it flow like a story while keeping the important facts accurate.",
  comic: "Turn the following news article into a short comic-book style script. Use panel descriptions (Panel 1, Panel 2, etc.) and short punchy dialogue or captions for each panel. Keep it factual but visually dramatic.",
};

async function callGroq(text: string, systemPrompt: string) {
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
    throw new Error("Groq API error");
  }
  return data.choices[0]?.message?.content || "No response generated.";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { text, mode, style } = body;

    if (!text || !text.trim()) {
      return NextResponse.json({ error: "No text provided" }, { status: 400 });
    }

    if (text.length > MAX_CHARS) {
      return NextResponse.json(
        { error: `Article too long — please trim to under ${MAX_CHARS} characters (currently ${text.length}).` },
        { status: 400 }
      );
    }

    if (mode === "compare") {
      const [teen, neutral, story] = await Promise.all([
        callGroq(text, stylePrompts.teen),
        callGroq(text, stylePrompts.neutral),
        callGroq(text, stylePrompts.story),
      ]);
      return NextResponse.json({ versions: { teen, neutral, story } });
    }

    const systemPrompt = stylePrompts[style] || stylePrompts.teen;
    const narrative = await callGroq(text, systemPrompt);
    return NextResponse.json({ narrative });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}