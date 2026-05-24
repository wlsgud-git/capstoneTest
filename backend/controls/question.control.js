import { AuthService } from "../service/auth.service.js";
import { questionService } from "../service/question.service.js";

export const questionControl = {
  question: async (req, res) => {
    let { question } = req.body;
    try {
      const answer = await questionService.question(question);

      res.status(201).json({ answer });
    } catch (err) {}
  },
};
