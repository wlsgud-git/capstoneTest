import dotenv from "dotenv";
dotenv.config();

const required = (key, defaultValue) => {
  let value = process.env[key] || defaultValue;
  if (!value) throw new Error("해당 환경변수는 존재하지 않습니다");
  return value;
};

export let config = {
  https: {
    port: parseInt(required("PORT"), 3000),
    client_host: required("CLIENT_HOST"),
    // server_host: required("SERVER_HOST"),
  },

  database: {
    user: required("DB_USER"),
    password: required("DB_PASSWORD"),
    host: required("DB_HOST"),
    database: required("DB_DATABASE"),
    port: parseInt(required("DB_PORT")),
  },

  ai: {
    api_key: required("OPENAI_API_KEY"),
  },

  //   secure: {
  //     salt: parseInt(required("SALT")),
  //   },

  jwt: {
    secret_key: required("JWT_SECRET_KEY"),
    access_expires: required("JWT_ACCESS_EXPIRES"),
    refresh_expires: required("JWT_REFRESH_EXPRIES"),
  },
};
