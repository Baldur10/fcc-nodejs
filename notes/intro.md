# Node.JS Introduction

1. Built using Chrome V8 engine
2. Environment to run JS outside browser
3. Only consists of pure logic
4. Not required to update to a newer version.

## Differences between Browser JS & Node.js

|Browser|Node.js|
|-|-|
|access to DOM|no Dom|
|access to Window (browser API)|no access to Window|
|no access to filesystem|access to filesystem is available|
|interactive apps|server side apps|
|ES6 modules|CommonJS|

## Running the Node app

1. type `node <file_path to app>`. Example: `node tutorial/app.js`

## Requisite Global variables
* `__dirname` : path to current directory
* `__filename` : file name
* `require` : function to use modules
* `module` : info about current module (file)
* `process` : info about env where the program is being executed
## JS Fundamentals required:

1. Callbacks, Promises, Async-Await
2. Reference playlist : https://www.youtube.com/watch?v=80KX6aD9R7M&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ
3. 