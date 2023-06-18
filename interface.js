// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question(`What's your name?`, (name) => {
//   console.log(`Hi ${name}!`);

//   readline.question("password : ", function (password) {
//     console.log("Your password : " + password);
//     readline.close();
//   });
// });

// hide password
// solution 1:
var readline = require('readline');
var Writable = require('stream').Writable;

var mutableStdout = new Writable({
  write: function(chunk, encoding, callback) {
    if (!this.muted)
      process.stdout.write(chunk, encoding);
    callback();
  }
});

mutableStdout.muted = false;

var rl = readline.createInterface({
  input: process.stdin,
  output: mutableStdout,
  terminal: true
});

rl.question('Password: ', function(password) {
  console.log('\nPassword is ' + password);
  rl.close();
});

mutableStdout.muted = true;

// solution 2
// var readline = require('readline');

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.stdoutMuted = true;

// rl.question('Password: ', function(password) {
//   console.log('\nPassword is ' + password);
//   rl.close();
// });

// rl._writeToOutput = function _writeToOutput(stringToWrite) {
//   if (rl.stdoutMuted)
//     rl.output.write("*");
//   else
//     rl.output.write(stringToWrite);
// };
