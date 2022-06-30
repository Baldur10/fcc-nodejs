const sum = (a,b) => a + b

var isPositive = number => number >= 0

const randomNumber = () => Math.random()

console.log(randomNumber())

// Normal Syntax
document.addEventListener('click', function(){
    console.log('click')
})

// Arrowise Syntax
document.addEventListener('click', () => console.log('click'))