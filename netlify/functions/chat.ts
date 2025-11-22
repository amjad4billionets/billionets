// Netlify will ignore this local type alias; it's only for editor help.
// The real signature it expects is an exported `handler` function.
export const handler: Handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST,OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "GEMINI_API_KEY is not configured" }),
    };
  }

  let messages: { role: "user" | "assistant"; content: string }[] = [];
  try {
    const body = JSON.parse(event.body || "{}");
    messages = Array.isArray(body.messages) ? body.messages : [];
  } catch {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Invalid JSON body" }),
    };
  }

  const systemPrompt = `You are the official conversational assistant for Billionets, an AI-first digital studio based in Dubai.

- Billionets provides: AI solutions & automation, web development, mobile apps, digital marketing, SEO & analytics, dashboards, and custom software.
- Location: 2606, Regal Tower, Business Bay, Dubai, UAE.
- Tone: professional, clear, concise, friendly, and sales-aware without being pushy.
- Always answer from Billionets' perspective using "we".
- When relevant, suggest specific services (AI automation, web dev, etc.) and invite the user to contact us.
- If you don't know something or it is outside Billionets, say so briefly and pivot back to how Billionets can help.
- Never invent prices or confidential internal details.
`;

  const contents = [
    {
      role: "user" as const,
      parts: [{ text: systemPrompt }],
    },
    ...messages.map((m) => ({
      role: m.role === "assistant" ? ("model" as const) : ("user" as const),
      parts: [{ text: m.content }],
    })),
  ];

  try {
    const endpoint =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify({ contents }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Gemini API error", response.status, text);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Error from Gemini API" }),
      };
    }

    const data = (await response.json()) as any;
    const reply =
      data?.candidates?.[0]?.content?.parts
        ?.map((p: any) => p.text || "")
        .join("\n") ||
      "Sorry, I couldn't generate a response right now.";

    return {
      statusCode: 200,
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify({ reply }),
    };
  } catch (error) {
    console.error("Chat function error", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Unexpected server error" }),
    };
  }
};

// Minimal Handler type to avoid bringing in @netlify/functions as a dependency.
export type Handler = (event: {
  httpMethod: string;
  body?: string | null;
}) => Promise<{
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
}>;
