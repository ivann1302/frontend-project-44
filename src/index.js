import * as readlineSync from 'readline-sync';
let userName;
let firstRandomNumber;
let resultOfCorrectAnswer;
let isGameOver;

// приветствие
const greetings = () => {
    userName = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
    console.log(`${'Hello,'} ${userName}${'!'}`);
};

// Функкция определения имени юзера
const getUsersName = () => userName;

// Функция описания правил игры
const rulesOfGame = (nameGame) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

// Функция вывода рандомного числа
function getRandom(min, max) {
    const minCopy = Math.ceil(min);
    const maxCopy = Math.floor(max);
    return Math.floor(Math.random() * (maxCopy - minCopy)) + minCopy;
}

// функция, задающая вопрос юзеру
const question = (nameGame) => {
    firstRandomNumber = getRandom(2, 100);
    let questionResult;
    questionResult = console.log(`${'Question:'} ${firstRandomNumber}`);
}

// Функция получения ответа от пользователя
const getUsersAnswer = () => readlineSync.question('Your answer: ');

// Функция расчета правильно ответа для игры brain-even
const brainEvenCorrectAnswer = (a) => {
    if (a % 2 === 0) {
        resultOfCorrectAnswer = 'yes';
    } else if (a % 2 !== 0) {
        resultOfCorrectAnswer = 'no';
    }
    return resultOfCorrectAnswer;
};

// Функция определения правильного ответа в зависимости от названия игры
const correctAnswer = (nameGame) => {
    switch (nameGame) {
    case 'brain-even':
        brainEvenCorrectAnswer(firstRandomNumber);
        break;
    }
    return resultOfCorrectAnswer.toString();
};

// Функция с выводом текста правильного ответа
const textOfcorrectAnswer = () => {
    console.log('Correct!');
}

  // Функция сравнения правильного результата с результатом юзера
const compareOfAnswer = (nameGame) => {
    const userAnswer = getUsersAnswer();
    const answer = correctAnswer(nameGame);
    if (answer === userAnswer) {
        textOfcorrectAnswer();
    } else {
        console.log(`${userAnswer} ${'is wrong answer ;(. Correct answer was'} ${answer}.\n${"Let's try again,"} ${getUsersName()}!`);
        isGameOver = 'true';
    }
};

const runGameWithCounter = (nameGame) => {
    greetings();
    rulesOfGame();
    const count = 3;
    let i = 0;
    while (i < count && isGameOver !== 'true') {
        question(nameGame);
        correctAnswer(nameGame);
        compareOfAnswer(nameGame);
        i += 1;
    }

    if (i === 3 & isGameOver !== 'true') {
        console.log(`Congradtulations, ${getUsersName()}!`);
    }
}

export default runGameWithCounter;