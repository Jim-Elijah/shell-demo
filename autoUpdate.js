const { exec, spawn } = require("child_process");

function findIde() {
  const command = spawn("find", [
    "/mnt/c/Users/zoujinqiang/.vscode/extensions/",
    "-maxdepth",
    "1",
    "-name",
    "mingyuan-xia.ultrarisc-ide*",
  ]);

  // similar to the previous example, print the output whenever it's
  // received
  let arr = [];
  command.stdout.on("data", (output) => {
    console.log("arr0", arr);
    console.log("Output: ", output.toString());
    arr.push(output.toString());
    console.log("arr1", arr);
  });
}

findIde();
