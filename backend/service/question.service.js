import { AuthData } from "../data/auth.data.js";
import { aiPlay } from "../utils/ai.utils.js";
import { hashedText, compareText } from "../utils/bcrypt.utils.js";
import { createJwt } from "../utils/jwt.utils.js";

export const questionService = {
  question: async (question) => {
    try {
      const answer = await aiPlay(question);

      //   db 넣어줘야 함
      return answer;
    } catch (err) {
      throw err;
    }
  },
};
