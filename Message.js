//get prompt module
const prompt = require('prompt-sync')();

//get user input for generating random message from the sysem.
let getInput = prompt('what can we do you(such as joke,astrology): ');

//genertate random number
const randomGenerateNumber = (num) => {
    return Math.floor(Math.random()* num);  
}

//create joke object in aray
const joke = [
    {
        data:'this is first joke'
    },
    {
        data:'this is second joke'
    },
    {
        data:'this is third joke'
    }
];


const generateRandomMessage = (getUserInput,joke) =>{
    let randomNumber = randomGenerateNumber(joke.length);

    switch (getUserInput){
        case 'joke':
            return joke[randomNumber].data;
            break;
        default:
            return 'wrong information';
    }
}



console.log(generateRandomMessage(getInput,joke));