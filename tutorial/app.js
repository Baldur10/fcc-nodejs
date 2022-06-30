// CommonJS, every file is a module (be default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const utils = require('./5-utils')
console.log(names)

utils.sayHi('susan')
utils.sayHi(names.john)
utils.greeting(names.peter)
