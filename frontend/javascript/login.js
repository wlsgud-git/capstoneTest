import { fetching } from "../network/http.js";

const loginForm = document.querySelector(".login_form");
const studentId = document.querySelector(".login_student_id");
const password = document.querySelector(".login_password");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let info = {
    student_id: studentId.value,
    password: password.value,
  };

  try {
    const data = await fetching("/auth/login", {
      method: "post",
      body: info,
    });
    let { status, inf } = await data;
    if (status == 200) window.location.href = "/";
  } catch (err) {
    alert(err);
  }
});
