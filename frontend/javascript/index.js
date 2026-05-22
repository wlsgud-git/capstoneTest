const questionForm = document.querySelector(".question_form");
const questionInput = document.querySelector(".question_input");
const questionBtn = document.querySelector(".question_btn");

const chatMemo = document.querySelector(".conversation_box");

const aBtn = document.querySelector(".answer");
const qBtn = document.querySelector(".question");
const coversa =
  "asdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsaasdasdsa";

function createChatBox(text, type) {
  return `<div class="chat_div" style="justify-content: ${type == "q" ? "end" : "start"}">
            <span class="chat_balloon" style="background-color: ${type == "q" ? "yellow" : "green"}"> ${text} </span>
          </div>`;
}

function questionReset(chat) {
  chatMemo.innerHTML += chat;
  chatMemo.scrollTop = chatMemo.scrollHeight;
}

questionForm.addEventListener("submit", (e) => {
  e.preventDefault();

  questionReset(createChatBox(questionInput.value, "q"));
  questionInput.value = "";
});
