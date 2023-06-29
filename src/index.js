import * as readlineSync from 'readline-sync';
let userName;
let firstRandomNumber;
let secondRandomNuber;
let sign;
let resultOfCorrectAnswer;
let isGameOver;

// Функция приветствия
const greetings = () => {
    userName = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
    console.log(`${'Hello,'} ${userName}${'!'}`);
};

// Функкция определения имени юзера
const getUsersName = () => userName;

// Функция описания правил игры
const rulesOfGame = (nameGame) => {
    switch (nameGame) {
        case 'brain-game': 
            console.log('Answer "yes" if the number is even, otherwise answer "no".');
            break;
        case 'brain-calc' :
            console.log('What is the result of Expression?');
            break;
    }
}

// Функция вывода рандомного числа
function getRandom(min, max) {
    const minCopy = Math.ceil(min);
    const maxCopy = Math.floor(max);
    return Math.floor(Math.random() * (maxCopy - minCopy)) + minCopy;
};

const getMathSign = () => {
    const arr = ['+', '-', '*'];
    const i = Math.floor(Math.random() * arr.length);
    const operator = arr[i];
    return operator;
};

// функция, задающая вопрос юзеру
const question = (nameGame) => {
    firstRandomNumber = getRandom(2, 100);
    secondRandomNuber = getRandom(2, 100);
    sign = getMathSign();
    let questionResult;
    switch (nameGame) {
        case 'brain-even' :
            questionResult = console.log(`Question: ${firstRandomNumber}`);
            break;
        case 'brain-calc' :
            questionResult = console.log(`Question: ${firstRandomNumber} ${sign} ${secondRandomNuber}`);
            break;    
    }    
}

// Функция получения ответа от пользователя
const getUsersAnswer = () => readlineSync.question('Your answer: ');

// Функция расчета правильно ответа для игры brain-even
const brainEvenCorrectAnswer = (num) => {
    if (num % 2 === 0) {
        resultOfCorrectAnswer = 'yes';
    } else if (num % 2 !== 0) {
        resultOfCorrectAnswer = 'no';
    }
    return resultOfCorrectAnswer;
};

// Функция расчета правильного ответа для игры brain-calc
const brainCalcCorrectAnswer = (num1, num2) => {
    if (sign === '+') {
        resultOfCorrectAnswer = num1 + num2;
    } else if (sign === '-') {
        resultOfCorrectAnswer = num1 - num2;
    } else {
        resultOfCorrectAnswer = num1 * num2;
    }
    return resultOfCorrectAnswer;
}

// Функция определения правильного ответа в зависимости от названия игры
const correctAnswer = (nameGame) => {
    switch (nameGame) {
        case 'brain-even' :
            brainEvenCorrectAnswer(firstRandomNumber);
            break;
        case 'brain-calc' :
            brainCalcCorrectAnswer(firstRandomNumber, secondRandomNuber);
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

// Функция запуска игры с количеством раундов равным 3
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