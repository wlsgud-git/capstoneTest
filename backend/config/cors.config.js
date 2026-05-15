import { config } from "./env.config.js";

export const corsOption = {
  credentials: true,
  optionsSuccessStatus: 200,
  origin: config.https.client_host,
};
