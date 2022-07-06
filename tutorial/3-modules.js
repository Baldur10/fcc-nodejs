// CommonJS, every file is a module (be default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const utils = require('./5-utils')
const data = require('./6-alternative-flavour')

// Invoking a module invokes it as well
require('./7-mind-grenade')

console.log(data)
console.log(names)

utils.sayHi('susan')
utils.sayHi(names.john)
utils.greeting(names.peter)
