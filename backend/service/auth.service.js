import { AuthData } from "../data/auth.data.js";
import { hashedText, compareText } from "../utils/bcrypt.utils.js";
import { createJwt } from "../utils/jwt.utils.js";

export const AuthService = {
  signup: async (student_id, name, password) => {
    try {
      let hashText = await hashedText(password);

      await AuthData.signup(student_id, name, hashText);
      return;
    } catch (err) {
      throw err;
    }
  },

  login: async (student_id, fresh_password) => {
    try {
      let userInfo = await AuthData.getUserByStudentId(student_id);

      let { name, password } = await userInfo[0];
      // 비밀번호 비교
      await compareText(fresh_password, password);
      let token = await createJwt({ name }, "access");
      return token;
    } catch (err) {
      throw err;
    }
  },
};
