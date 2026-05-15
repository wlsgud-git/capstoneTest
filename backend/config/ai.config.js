import OpenAI from "openai";
import { config } from "./env.config.js";

export const client = new OpenAI({
  apiKey: config.ai.api_key,
});
