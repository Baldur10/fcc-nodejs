const path = require('path');

console.log(path.sep);

const filePath = path.join('/content','subfolder','test.txt');
console.log("File path to test.txt: ",filePath);

const baseName = path.basename(filePath);
console.log("BaseName File Path: ", baseName);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log("Absolute Path is: ", absolute);