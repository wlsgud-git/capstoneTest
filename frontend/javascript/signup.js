import { fetching } from "../network/http.js";

const signupForm = document.querySelector(".signup_form");
const studentId = document.querySelector(".signup_student_id");
const name = document.querySelector(".signup_name");
const password = document.querySelector(".signup_password");
const passwordCheck = document.querySelector(".signup_password_check");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let info = {
    student_id: studentId.value,
    name: name.value,
    password: password.value,
    password_check: passwordCheck.value,
  };

  try {
    const data = await fetching("/auth/signup", {
      method: "post",
      body: info,
    });
    let { status, inf } = await data;
    if (status == 201) {
      alert(inf.message);
      window.location.href = "/login";
    }
  } catch (err) {
    alert(err);
  }
});
