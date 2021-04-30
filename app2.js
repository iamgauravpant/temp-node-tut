//GLOBALS  - No window!!!
//__dirname - path to current directory
//__filename - file name
//require - function to use modules (CommonJS)
//module - info about current module (file)
//process - info about environment where the program is being executed

//npm - global command , comes with node
// npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it any project
// npm install -g <packageName>
//sudo install -g <packageName> (mac)

// package.json - manifest file(stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm unit (step by step , press Enter to skip)
//npm unit -y (everything default)

//1st
// a basic program
// console.log(__dirname);
// setInterval(() => {
//   console.log("Hello World");
// }, 1000);

//     MAIN CODE STARTS HERE
const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
