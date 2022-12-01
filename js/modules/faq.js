const answer = document.querySelector(".faq__answer");
const questions = document.querySelectorAll(".faq__question");
const button = document.querySelectorAll(".faq__button");

function openAnswer() {
  answer.classList.add("faq__answer_open");
}

export function addFaqEventListener() {
  questions.forEach((question) => {
    question.addEventListener("click", () => {
      question.classList.toggle("active");
      if (question.classList.contains("active")) {
        question.nextElementSibling.classList.add("faq__answer_open");
        question.children[1].classList.add("faq__close-button");
      } else {
        question.nextElementSibling.classList.remove("faq__answer_open");
        question.children[1].classList.remove("faq__close-button");
      }
    });
  });
}
