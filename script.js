const quizData = [
    {
        question: "Вопрос 1 из 21",
        choices: [
            { text: "Я не чувствую себя расстроенным, печальным.", score: 0 },
            { text: "Я расстроен.", score: 1 },
            { text: "Я все время расстроен и не могу от этого отключиться.", score: 2 },
            { text: "Я настолько расстроен и несчастлив, что не могу это выдержать.", score: 3 }
        ]
    },
    {
        question: "Вопрос 2 из 21",
        choices: [
            { text: "Я не тревожусь о своем будущем.", score: 0 },
            { text: "Я чувствую, что озадачен будущим.", score: 1 },
            { text: "Я чувствую, что меня ничего не ждет в будущем.", score: 2 },
            { text: "Мое будущее безнадежно, и ничто не может измениться к лучшему.", score: 3 }
        ]
    },
    {
        question: "Вопрос 3 из 21",
        choices: [
            { text: "Я не чувствую себя неудачником.", score: 0 },
            { text: "Я чувствую, что терпел больше неудач, чем другие люди.", score: 1 },
            { text: "Когда я оглядываюсь на свою жизнь, я вижу в ней много неудач.", score: 2 },
            { text: "Я чувствую, что как личность я — полный неудачник.", score: 3 }
        ]
    },
    {
        question: "Вопрос 4 из 21",
        choices: [
            { text: "Я получаю столько же удовлетворения от жизни, как раньше.", score: 0 },
            { text: "Я не получаю столько же удовлетворения от жизни, как раньше.", score: 1 },
            { text: "Я больше не получаю удовлетворения ни от чего.", score: 2 },
            { text: "Я полностью не удовлетворен жизнью и мне все надоело.", score: 3 }
        ]
    },
    {
        question: "Вопрос 5 из 21",
        choices: [
            { text: "Я не чувствую себя в чем-нибудь виноватым.", score: 0 },
            { text: "Достаточно часто я чувствую себя виноватым.", score: 1 },
            { text: "Большую часть времени я чувствую себя виноватым.", score: 2 },
            { text: "Я постоянно испытываю чувство вины.", score: 3 }
        ]
    },
    {
        question: "Вопрос 6 из 21",
        choices: [
            { text: "Я не чувствую, что могу быть наказанным за что-либо.", score: 0 },
            { text: "Я чувствую, что могу быть наказан.", score: 1 },
            { text: "Я ожидаю, что могу быть наказан.", score: 2 },
            { text: "Я чувствую себя уже наказанным.", score: 3 }
        ]
    },
    {
        question: "Вопрос 7 из 21",
        choices: [
            { text: "Я не разочаровался в себе.", score: 0 },
            { text: "Я разочаровался в себе.", score: 1 },
            { text: "Я себе противен.", score: 2 },
            { text: "Я себя ненавижу.", score: 3 }
        ]
    },
    {
        question: "Вопрос 8 из 21",
        choices: [
            { text: "Я знаю, что я не хуже других.", score: 0 },
            { text: "Я критикую себя за ошибки и слабости.", score: 1 },
            { text: "Я все время обвиняю себя за свои поступки.", score: 2 },
            { text: "Я виню себя во всем плохом, что происходит.", score: 3 }
        ]
    },
    {
        question: "Вопрос 9 из 21",
        choices: [
            { text: "Я никогда не думал покончить с собой. ", score: 0 },
            { text: "Ко мне приходят мысли покончить с собой, но я не буду их осуществлять.", score: 1 },
            { text: "Я хотел бы покончить с собой.", score: 2 },
            { text: "Я бы убил себя, если бы представился случай.", score: 3 }
        ]
    },
    {
        question: "Вопрос 10 из 21",
        choices: [
            { text: "Я плачу не больше, чем обычно.", score: 0 },
            { text: "Сейчас я плачу чаще, чем раньше.", score: 1 },
            { text: "Теперь я все время плачу.", score: 2 },
            { text: "Раньше я мог плакать, а сейчас не могу, даже если мне хочется.", score: 3 }
        ]
    },
    {
        question: "Вопрос 11 из 21",
        choices: [
            { text: "Сейчас я раздражителен не более, чем обычно.", score: 0 },
            { text: "Я более легко раздражаюсь, чем раньше.", score: 1 },
            { text: "Теперь я постоянно чувствую, что раздражен.", score: 2 },
            { text: "Я стал равнодушен к вещам, которые меня раньше раздражали.", score: 3 }
        ]
    },
    {
        question: "Вопрос 12 из 21",
        choices: [
            { text: "Я не утратил интереса к другим людям.", score: 0 },
            { text: "Я меньше интересуюсь другими людьми, чем раньше.", score: 1 },
            { text: "Я почти потерял интерес к другим людям.", score: 2 },
            { text: "Я полностью утратил интерес к другим людям.", score: 3 }
        ]
    },
    {
        question: "Вопрос 13 из 21",
        choices: [
            { text: "Я откладываю принятие решения иногда, как и раньше.", score: 0 },
            { text: "Я чаще, чем раньше, откладываю принятие решения.", score: 1 },
            { text: "Мне труднее принимать решения, чем раньше.", score: 2 },
            { text: "Я больше не могу принимать решения.", score: 3 }
        ]
    },
    {
        question: "Вопрос 14 из 21",
        choices: [
            { text: "Я не чувствую, что выгляжу хуже, чем обычно.", score: 0 },
            { text: "Меня тревожит, что я выгляжу старым и непривлекательным.", score: 1 },
            { text: "Я знаю, что в моей внешности произошли существенные изменения, делающие меня непривлекательным.", score: 2 },
            { text: "Я знаю, что выгляжу безобразно.", score: 3 }
        ]
    },
    {
        question: "Вопрос 15 из 21",
        choices: [
            { text: "Я могу работать так же хорошо, как и раньше.", score: 0 },
            { text: "Я с трудом заставляю себя делать что-либо.", score: 1 },
            { text: "Я все время расстроен и не могу от этого отключиться.", score: 2 },
            { text: "Я совсем не могу выполнять никакую работу.", score: 3 }
        ]
    },
    {
        question: "Вопрос 16 из 21",
        choices: [
            { text: "Я сплю так же хорошо, как и раньше.", score: 0 },
            { text: "Сейчас я сплю хуже, чем раньше.", score: 1 },
            { text: "Я просыпаюсь на 1-2 часа раньше, и мне трудно заснуть опять.", score: 2 },
            { text: "Я просыпаюсь на несколько часов раньше обычного и больше не могу заснуть.", score: 3 }
        ]
    },
    {
        question: "Вопрос 17 из 21",
        choices: [
            { text: "Я устаю не больше, чем обычно.", score: 0 },
            { text: "Теперь я устаю быстрее, чем раньше.", score: 1 },
            { text: "Я устаю почти от всего, что я делаю.", score: 2 },
            { text: "Я не могу ничего делать из-за усталости.", score: 3 }
        ]
    },
    {
        question: "Вопрос 18 из 21",
        choices: [
            { text: "Мой аппетит не хуже, чем обычно.", score: 0 },
            { text: "Мой аппетит стал хуже, чем раньше.", score: 1 },
            { text: "Мой аппетит теперь значительно хуже.", score: 2 },
            { text: "У меня вообще нет аппетита.", score: 3 }
        ]
    },
    {
        question: "Вопрос 19 из 21",
        choices: [
            { text: "В последнее время я не похудел или потеря веса была незначительной.", score: 0 },
            { text: "За последнее время я потерял более 2 кг.", score: 1 },
            { text: "Я потерял более 5 кг.", score: 2 },
            { text: "Я потерял более 7 кr.", score: 3 }
        ]
    },
    {
        question: "Вопрос 20 из 21",
        choices: [
            { text: "Я беспокоюсь о своем здоровье не больше, чем обычно.", score: 0 },
            { text: "Меня тревожат проблемы моего физического здоровья, такие, как боли, расстройство желудка, запоры и т.д.", score: 1 },
            { text: "Я очень обеспокоен своим физическим состоянием, и мне трудно думать о чем-либо другом.", score: 2 },
            { text: "Я настолько обеспокоен своим физическим состоянием, что больше ни о чем не могу думать.", score: 3 }
        ]
    },
    {
        question: "Вопрос 21 из 21",
        choices: [
            { text: "В последнее время я не замечал изменения своего интереса к близости.", score: 0 },
            { text: "Меня меньше занимают проблемы близости, чем раньше.", score: 1 },
            { text: "Сейчас я значительно меньше интересуюсь межполовыми отношениями, чем раньше. ", score: 2 },
            { text: "Я полностью утратил либидо интерес.", score: 3 }
        ]
    }
];

const quizContainer = document.getElementById("quiz");
const questionContainer = document.getElementById("question");
const choicesContainer = document.getElementById("choices");
const scoreContainer = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerText = currentQuizData.question;
    choicesContainer.innerHTML = "";
    currentQuizData.choices.forEach(choice => {
        const choiceElement = document.createElement("button");
        choiceElement.innerText = choice.text;
        choiceElement.classList.add("choice");
        choiceElement.addEventListener("click", () => checkAnswer(choice.score));
        choicesContainer.appendChild(choiceElement);
    });
}

function checkAnswer(scoreToAdd) {
    score += scoreToAdd; // Add the score of the selected answer option to the total score
    scoreContainer.innerText = `Score: ${score}`;
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        displayQuizOutcome();
    }
}

function displayOutcome(score) {
    let outcome = "";
    if (score <= 9) {
        outcome = "Отсутствие депрессивных симптомов";
    } else if (score <= 15) {
        outcome = "Легкая депрессия (субдепрессия):<br><a href='https://example.com/excellent' target='_blank'>перейти к виртуальному ассистенту</a>";
    } else if (score <= 19) {
        outcome = "Умеренная депрессия:<br><a href='https://example.com/excellent' target='_blank'>перейти к виртуальному ассистенту</a>";
    } else if (score <= 29) {
        outcome = "Выраженная депрессия (средней тяжести):<br><a href='https://example.com/excellent' target='_blank'>перейти к виртуальному ассистенту</a>"
    } else {
        outcome = "Тяжёлая депрессия:<br><a href='https://example.com/excellent' target='_blank'>перейти к виртуальному ассистенту</a>";
    }
    return outcome;
}

function displayQuizOutcome() {
    const outcomeContainer = document.createElement("div");
    outcomeContainer.classList.add("outcome");
    outcomeContainer.innerHTML = `<h2>${displayOutcome(score)}</h2>`;
    quizContainer.innerHTML = "";
    quizContainer.appendChild(outcomeContainer);
}

displayQuestion();
