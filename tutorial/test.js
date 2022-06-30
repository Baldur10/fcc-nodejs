let person = 'Mike'
let age = 28

let myTag = (strings, personExp, ageExp) =>{
    let str0 = strings[0]
    let str1 = strings[1]
    let str2 = strings[2]
    let ageStr

    if (ageExp>99){
        ageStr = 'centenarian'
    } else{
        ageStr = 'youngster'
    }
    return `${str0}${personExp}${str1}${ageStr}${str2}`
}

let output = myTag`That ${person} is a ${age}.`

console.log(output)