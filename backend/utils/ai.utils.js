import { machine } from "../config/ai.config.js";

export const aiPlay = async (question) => {
  try {
    const answer = await machine.generateContent(question);
    return answer.response.text();
  } catch (err) {
    throw err;
  }
};
