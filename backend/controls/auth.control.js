import { AuthService } from "../service/auth.service.js";

export const AuthControl = {
  signup: async (req, res) => {
    let { student_id, name, password, password_check } = req.body;
    try {
      const result = await AuthService.signup(student_id, name, password);

      res.status(201).json({
        message: "회원가입이 성공적으로 완료되었습니다.",
      });
    } catch (err) {}
  },

  login: async (req, res) => {
    let { student_id, password } = req.body;

    try {
      const access_token = await AuthService.login(student_id, password);
      res.cookie("accessToken", access_token, { httpOnly: true });

      res.status(200).json({
        message: "로그인이 완료되었습니다.",
      });
    } catch (err) {
      // res.status()
    }
  },
};
