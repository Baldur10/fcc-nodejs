// Example of Arrowise functions using a class
class Person {
    constructor(name){
        this.name
    }
    printNameArrow(){
        setTimeout(()=>{
            console.log('Arrow ' + this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }, 100)
    }
}

let person = new Person('Bpb')
person.printNameArrow()
person.printNameFunction()

