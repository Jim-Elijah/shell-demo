const fs = require("fs");
const { exec } = require("child_process");
const { promisify } = require("util");

const promisifyExec = promisify(exec);

async function main() {
const path = `c:\\Users\\zoujinqiang\\AppData\\Roaming\\Code\\User\\globalStorage\\mingyuan-xia.ultrarisc-ide\\file-downloader-downloads\\ultrarisc-ide.vsix.md5`
// const path = `c:/Users`
  // const path =
  //   "/c/Users/zoujinqiang/AppData/Roaming/Code/User/globalStorage/mingyuan-xia.ultrarisc-ide/file-downloader-downloads/packages";
  if (fs.existsSync(path)) {
    console.log("true");
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        throw err
      }
      console.log('data', data);
    })
    // const { stdout, stderr } = await promisifyExec(`cd ${path}/../../.. && ls -l`);
    // console.log("cp stdout", stdout);
    // console.log("cp stderr", stderr);
  } else {
    // fs.mkdirSync(`${packageDir}/tmp`, { recursive: true });
    console.log("false");
  }
}

main();
