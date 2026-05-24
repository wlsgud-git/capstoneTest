import { fetching } from "../network/http.js";
import { renderMarkDown } from "./markdown.js";

const questionForm = document.querySelector(".question_form");
const questionInput = document.querySelector(".question_input");
const questionBtn = document.querySelector(".question_btn");

const chatMemo = document.querySelector(".conversation_box");

function createChatHTML(text, type) {
  return `<div class="chat_div" style="justify-content: ${type == "q" ? "end" : "start"}">
            <span class="chat_balloon" style="background-color: ${type == "q" ? "yellow" : "green"}"> ${text} </span>
          </div>`;
}

function createChat(chat) {
  chatMemo.innerHTML += chat;
  chatMemo.scrollTop = chatMemo.scrollHeight;
}

questionForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const info = { question: questionInput.value };

  createChat(createChatHTML(questionInput.value, "q"));
  questionInput.value = "";

  try {
    const answer = await fetching("/q/question", {
      method: "post",
      body: info,
    });

    let { status, inf } = await answer;
    const answerHTML = renderMarkDown(inf.answer);

    createChat(createChatHTML(answerHTML, "a"));
  } catch (err) {
    alert("답변 생성 중 오류 발생");
  }
});
