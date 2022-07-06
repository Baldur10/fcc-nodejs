// Functions are called when a module is imported
// addValues is invoked when this module is imported in another script

const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`The sum is : ${num1 + num2}`);
}

addValues()