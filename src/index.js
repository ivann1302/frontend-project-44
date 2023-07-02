import * as readlineSync from 'readline-sync';
let userName;
let firstRandomNumber;
let secondRandomNuber;
let sign;
let hideOfProgression;
let stepOfProgression;
let hidenNum;
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
        case 'brain-gcd' :
            console.log('Find the greatest common divisor given numbers.');
            break;
        case 'brain-progression' :
            console.log('What number is missing in the progression?');
            break;
    }
}

// Функция вывода рандомного числа
function getRandom(min, max) {
    const minCopy = Math.ceil(min);
    const maxCopy = Math.floor(max);
    return Math.floor(Math.random() * (maxCopy - minCopy)) + minCopy;
};

// Функция вывода рандомного знака
const getMathSign = () => {
    const arr = ['+', '-', '*'];
    const i = Math.floor(Math.random() * arr.length);
    const operator = arr[i];
    return operator;
};

// Функция вывода прогрессии с загаданным числом
const getProgression = () => {
    const num = getRandom(0, 30);
    const arr = [];
    stepOfProgression = getRandom(0, 10)
    let progression = num;
    hideOfProgression = getRandom(0,10)
    for (let i =0; i < 10; i += 1) {
        arr[i] = progression;
        progression += stepOfProgression;
    }
    hidenNum = arr[hideOfProgression]
    arr[hideOfProgression] = '..'
    return arr.join();
};

// Функция, задающая вопрос юзеру
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
        case 'brain-gcd' :
            console.log(`Question: ${firstRandomNumber} ${secondRandomNuber}`);
            break;
        case 'brain-progression' :
            console.log(`Question: ${getProgression()}`);
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
};

// Функция расчета правильного ответа для игры brain-gcd
const brainGcdCorrectAnswer = (num1, num2) => {
    const min = Math.min(num1, num2)
    for (let i = 0; i <= min; i += 1) {
        if (num1 % i === 0 && num2 % i === 0) {
            resultOfCorrectAnswer = i;
        }
    }
    return resultOfCorrectAnswer;
};

// Функция определения правильного ответа в зависимости от названия игры
const correctAnswer = (nameGame) => {
    switch (nameGame) {
        case 'brain-even' :
            brainEvenCorrectAnswer(firstRandomNumber);
            break;
        case 'brain-calc' :
            brainCalcCorrectAnswer(firstRandomNumber, secondRandomNuber);
            break;
        case 'brain-gcd' :
            brainGcdCorrectAnswer(firstRandomNumber, secondRandomNuber);
            break;
        case 'brain-progression' :
            resultOfCorrectAnswer = hidenNum;
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
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was' '${answer}'.\n${"Let's try again,"} ${getUsersName()}!`);
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