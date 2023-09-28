// var exec = require('child_process').exec; 
// var cmdStr = "ls";
// exec(cmdStr, function(err,stdout,stderr){
//     if(err) {
//         console.log('error:'+stderr);
//     } else {
//         console.log('args stdout:'+stdout);
//     }
// });

// const { rejects } = require('assert');
// const { spawn } = require('child_process');
// const util = require('util');
// const promisifiedSpawn = util.promisify(spawn);

// const asyncSpawn = async (...args) => {
//     return new Promise((resolve, reject) => {
//       const proc = spawn(...args);
//       proc.stdout.pipe(process.stdout);
//       proc.stderr.pipe(process.stderr);
//       proc.on("close", () => {
//         resolve();
//       });
//       proc.on('error', (err) => {
//         console.log('error');
//         reject(err)
//       })
//     });
//   };
// (async function(){
//     await asyncSpawn('ls')
//     console.log('end');
// })()


const exec = require('child_process').exec;
const promisify = require('util').promisify
const path = require('path')
const process = require('process')

console.log('env', process.env);

const paths = process.env.PATH.split(';');
console.log('paths', paths);
const gitPathRegex = /.*\\Git\\cmd$/;
const gitPath = paths.find(p => gitPathRegex.test(p));
if (gitPath) {
  console.log('gitPath ', gitPath);
  const normalizedPath = path.normalize(gitPath);
  console.log('normalizedPath ', normalizedPath.toString());

} else {
  console.log('not found');

}

// const promisifyExec = promisify(exec);

// (async function(){
//     const { stdout, stderr } = await promisifyExec(`ls`);
//     // const { stdout, stderr } = await promisifyExec(`powershell.exe ls`);
//     console.log('stdout:', stdout);
//     console.error('stderr:', stderr);
// })()