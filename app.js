//3rd lecture

// var http = require("http");

// http
//   .createServer(function (req, res) {
//     res.write("Welcome back Gaurav");
//     res.end();
//   })
//   .listen(8080);

// 6th lecture

// var calc = require("./calc.js");
// result = calc.add(5, 7);
// sub_result = calc.sub(9, 3);
// console.log("The output is " + result);
// console.log("The subtraction is " + sub_result);

// 7th lecture

// in the 7th lecture , we learnt about how to read a file , write in a file, delete a file .
//readFile function -> used to read a file
//writeFile function -> used to write in a file
//appendFile function -> used to append a file
//unlink function - > used to delete a file

var fs = require("fs");

// fs.readFile("./calc.js", "utf8", function (err, data) {
//   console.log(data);
// });
// 1st parameter - > file name
// 2nd parameter - > encoding
// 3rd parameter - > callback function

// fs.writeFile("./calc.js", 'console.log("done")', function (err) {
//   console.log("data saved");
// });

// fs.appendFile("./calc.js", 'console.log("done")', function (err) {
//   console.log("data saved");
// });

fs.unlink("./calc1.js", function (err) {
  console.log("deleted");
});
