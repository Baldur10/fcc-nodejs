// Alternate methods to export modules

module.exports.items = ['item1','item2'];

const person = {
    name: 'bob',
}

// module.exports is an object so we are adding properties to it
module.exports.singlePerson = person;