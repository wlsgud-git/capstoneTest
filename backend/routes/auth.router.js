import express, { Router } from "express";
import { AuthControl } from "../controls/auth.control.js";

const router = express.Router();

// 로그인
router.post("/login", AuthControl.login);

// 회원가입;
router.post("/signup", AuthControl.signup);

export default router;
