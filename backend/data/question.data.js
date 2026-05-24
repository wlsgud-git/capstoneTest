import { dbPlay } from "../utils/db.utils.js";

export const questionData = {
  getUserByStudentId: async (student_id) => {
    try {
      let query = `select * from users where student_id = ?`;
      let data = [student_id];
      return dbPlay(query, data);
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
