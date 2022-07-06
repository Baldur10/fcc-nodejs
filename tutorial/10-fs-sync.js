// Synchronised File reading and writing
// Runs into issues in parallel systems

const {readFileSync,writeFileSync} = require('fs');
console.log(`start`);

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first, "\n",second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}\n`,
    {flag: 'a'}
    )

console.log(`Done with this task.`);
console.log(`Starting next task.`)