// 2nd
// Modules

//CommonJS , every file in node is a module(by default)
//Modules - Encapsulated code(only share minimum)

const names = require("./4-names");

const sayHi = require("./5-utils");

//3rd

const data = require("./6-alternative-flavor");
// console.log(data);
require("./7-mind-grenade");

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
