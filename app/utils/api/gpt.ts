import { NextApiRequest, NextApiResponse } from "next";

type ChatResponse = {
  saying?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse>
) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-002",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: req.body.userMessage },
        ],
      }),
    });

    const data = await response.json();

    res.status(200).json({ saying: data.choices[0]?.message?.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
