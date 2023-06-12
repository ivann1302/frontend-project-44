import * as input from 'readline-sync';

const greeting = () => {
	let name = input.question('May I have your name? ');
	console.log(`Hello, ${name}!`);
};

export default greeting;
