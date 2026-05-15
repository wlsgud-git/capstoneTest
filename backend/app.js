import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { fileURLToPath } from "url";

// other file
import { corsOption } from "./config/cors.config.js";
import { config } from "./config/env.config.js";
import { dbPlay } from "./utils/db.utils.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOption));

app.use(express.static(path.join(__dirname, "../frontend")));

// 라우터 설정
import AuthRouter from "./routes/auth.router.js";

app.use("/auth", AuthRouter);

// 홈페이지
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html/index.html"));
});
// 로그인 페이지
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html/login.html"));
});
// 회원가입 페이지
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html/signup.html"));
});

app.listen(3000, () => {
  console.log(`app listening on port ${3000}`);
});
