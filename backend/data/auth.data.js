import { dbPlay } from "../utils/db.utils.js";

export const AuthData = {
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

  signup: async (student_id, name, password) => {
    try {
      let query = `insert into users values (?,?,?,default)`;
      let data = [student_id, name, password];
      return dbPlay(query, data);
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
