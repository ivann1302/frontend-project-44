import * as input from 'readline-sync';

const greeting = () => {
  const name = input.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const yourName = name;
  console.log(yourName);
};

export default greeting;
