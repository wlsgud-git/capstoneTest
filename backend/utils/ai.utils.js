import { client } from "../config/ai.config.js";

export const aiPlay = async (question) => {
  try {
    const answer = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: question,
        },
      ],
    });
    return answer.choices[0].message.content;
  } catch (err) {
    throw err;
  }
};
