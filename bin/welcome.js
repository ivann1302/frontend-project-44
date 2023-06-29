import * as input from 'readline-sync';

const greeting = () => {
    console.log('Welcome to the Brain Games!');
	let name = input.question('May I have your name? ');
	console.log(`Hello, ${name}!`);
    let yourName = name;
    return yourName;
}


export default greeting;