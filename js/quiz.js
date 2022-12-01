import girl_image from '../images/Pic_girl.svg';

let numb = 1;

let test_popup = document.getElementById("test_popup");
let test_popup__bg = document.getElementById("test_popup__bg");
let quiz_wrapper = document.getElementById("quiz_wrapper");

const quizArray = [
  {
    id: "1",
    question: "1.Вам больше нравится работать в команде или в одиночку?",
    options: ["в команде", "в одиночку"],
    replies: [2, 3],
  },
  {
    id: "3",
    question: "2. Если бы ты был учителем, то что тебе больше хотелось: читать лекции или проверять домашние задания?",
    options: ["читать лекции", "проверять домашние задания"],
    replies: [4, 5],
  },
  {
    id: "5",
    question: "3. Какой свой навык вы хотели бы прокачать?",
    options: ["soft skills", "hard skills"],
    replies: [5, 6],
  },
  {
    id: "7",
    question: "4. Вы любите общаться в чатах?",
    options: ["да", "нет"],
    replies: [7, 8],
  },
  {
    id: "9",
    question: "5. В какой из сфер у тебя есть опыт работы?",
    options: ["наставник", "реквьюер"],
    correct: [9, 10],
  },
];



let initialize = (numb) => {
	let test_subtitle = document.getElementById("test_subtitle");
	test_subtitle.innerHTML = `Вопрос ${Math.ceil(numb/2)} из 5`;
	if (numb!=1){
		let dot = document.getElementById(`test_dot${Math.ceil(numb/2)}`);
		dot.style.backgroundColor = "#9D85F4";	
	}

	quiz_wrapper.innerHTML += `<button id="quiz_Question${numb}" class="question"></button>`
	quiz_wrapper.innerHTML += `<button id="quiz_reply${numb}" class="reply"></button>`
	quiz_wrapper.innerHTML += `<button id="quiz_reply${numb+1}" class="reply"></button>`
  quiz_wrapper.innerHTML += `<button id="quiz_focuser${numb}" class="reply_focuser"></button>`

	let quizQuestion = document.getElementById(`quiz_Question${numb}`);
	let quizReply1 = document.getElementById(`quiz_reply${numb}`);
	let quizReply2 = document.getElementById(`quiz_reply${numb+1}`);
  
  quiz_wrapper.scrollTop=quiz_wrapper.scrollHeight;

  let repliesArray = [];
	const result = quizArray.filter(obj => obj.id == numb);

	  quizQuestion.innerHTML = result[0].question;
  	quizReply1.innerHTML = result[0].options[0];
  	quizReply2.innerHTML = result[0].options[1];

	  quizReply1.addEventListener("click", (e) => {
		e.preventDefault();
		quizReply2.classList.add("hidden");
		quizReply1.style.backgroundColor = "#FEF9D8";
    quizReply1.style.border = "none";
    repliesArray.push(result[0].options[0]);
		if (numb<9) initialize (numb+2,numb+3)
    else sendToServer(repliesArray);
	})
	quizReply2.addEventListener("click", (e) => {
		e.preventDefault();
		quizReply1.classList.add("hidden");
		quizReply2.style.backgroundColor = "#FEF9D8";	
    quizReply2.style.border = "none";
    repliesArray.push(result[0].options[1]);
		if (numb<9) initialize (numb+2,numb+3)
    else sendToServer(repliesArray);
	})
}

initialize(1);
var timer = null;

const sendToServer = async (results) => {
  try {
    loading(true);
    // const resultData = await sendIt(results);
    const resultData = results;
    if (!resultData) {
      throw new Error("Invalid data");
    }    
  } catch (error) {console.log(`Ошибка: ${error}`)}
       finally {
      setTimeout(() => {
        loading(false);
        showResult (); //showResult (resultData);
      }, 5000) 
  }
}

const loading = (loading) => {
  if (loading) {
    test_popup.innerHTML = `
      <div>
      <div class="load_dots">
      <span class="load_dot load_dot1" id="load_dot1"></span>
      <span class="load_dot load_dot2" id="load_dot2"></span>
      <span class="load_dot load_dot3" id="load_dot3"></span>
      <span class="load_dot load_dot4" id="load_dot4"></span>
      <span class="load_dot load_dot5" id="load_dot5"></span>
      </div>
      <h2 class="load_title">Подсчет результатов...</h2>
      </div>
      `;
    loader (true);
}
else {
  loader(false)};
}

const showResult = () => { 
  test_popup.innerHTML = `
  <h2 class="title is-2 quiz_final_title">Тебе бы подошла роль ревьюера!</h2>

  <div class="columns quiz_block">
  <div class="column">
    <p class="quiz_text">Проверяет код и проекты студентов;
    Простыми словами объясняет им их ошибки;</br>
    </br>
    Даёт корректирующую обратную связь;
    Оценивает работы — зачёт/незачёт.</p>
  </div>
  <div class="column">
  <img class="quiz_pic" src=${girl_image} alt="#">
  </div>
</div>
  </div>

  <button href="#" class="quiz_button_to_vac" id="quiz_button_to_vac">Открыть список вакансий</button>
  <button href="#" class="quiz_button_to_descr" id="quiz_button_to_descr">Вернуться к описанию профессий</button>
  `;
  let button_vac = document.getElementById('quiz_button_to_vac');
  let button_descr = document.getElementById('quiz_button_to_descr');

  button_vac.addEventListener("click", (e) => {
    e.preventDefault();
    test_popup__bg.classList.remove('active');
  }
  )
  button_descr.addEventListener("click", (e) => {
    e.preventDefault();
    test_popup__bg.classList.remove('active');
  }
  )
}

const loader = (state) => {

  if (!state) {
    clearInterval(timer);
    return;
   }

  let i = 1;
  timer = setInterval(() => {
    let nextDot = document.getElementById(`load_dot${i++}`);
    nextDot.style.backgroundColor = "#9D85F4";
    if (i == 2) {let prevDot = document.getElementById(`load_dot5`)
    prevDot.style.backgroundColor = "#DCD3FB";}
    else {let prevDot = document.getElementById(`load_dot${i-2}`)
    prevDot.style.backgroundColor = "#DCD3FB";};
    if ( i == 6 ) {i = 1};
  }, 1000)
 }

