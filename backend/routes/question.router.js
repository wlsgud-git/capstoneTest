import express, { Router } from "express";
import { questionControl } from "../controls/question.control.js";

const router = express.Router();

// 질문
router.post("/question", questionControl.question);

export default router;
