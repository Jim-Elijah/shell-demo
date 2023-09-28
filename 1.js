const { exec, spawn } = require("child_process");

function basicShellCommand() {
  // run the `ls` command using exec
  exec("ls -la", (err, output) => {
    // once the command has completed, the callback function is called
    if (err) {
      // log and return if we encounter an error
      console.error("could not execute command: ", err);
      return;
    }
    // log the output received from the command
    console.log("Output: \n", output);
  });
}

function longRunningCommand() {
  // start the `ping google.com` command
  const command = spawn("ping", ["baidu1.com", "-c 4"]);
  // const command = spawn('ping', ["google.com"])

  // the `data` event is fired every time data is
  // output from the command
  command.stdout.on("data", (output) => {
    // the output data is captured and printed in the callback
    console.log("Output: ", output.toString('utf-8'));
  });
  command.stderr.on('data',  (output) => {
    // the output data is captured and printed in the callback
    console.log("Output: ", output.toString('utf-8'));
  });
  command.err.on('data',  (output) => {
    // the output data is captured and printed in the callback
    console.log("Output: ", output.toString('utf-8'));
  });
}

function spawnStdin() {
  // run the grep command
  const command = spawn("grep", ["apple"]);

  // use the stdin stream from the command to
  // send data to the spawned command
  command.stdin.write("1. pear\n");
  command.stdin.write("2. grapes\n");
  command.stdin.write("3. apple\n");
  command.stdin.write("4. banana\n");
  // once we're done sending input, call the `end` method
  command.stdin.end();

  // similar to the previous example, print the output whenever it's
  // received
  command.stdout.on("data", (output) => {
    console.log("Output: ", output.toString());
  });
}

function kill() {
  // execute the sleep command - this will
  // wait for 100 seconds before exiting
  const command = exec("sleep 100");

  // when a child process exits, it fires
  // the "close" event
  command.on("close", (code) => {
    console.log("process has exited");
  });

  // Since we don't want to wait for 100 seconds,
  // we can send a kill command after a 1 second timeout
  setTimeout(() => {
    command.kill();
  }, 1000);
}

function findMs() {
  // run the grep command
  const command = spawn("find", [
    "/mnt/c/Users/zjq/.vscode/extensions/",
    "-maxdepth",
    "1",
    "-name",
    // "ms-vscode*"
    "ms-vscode-remote.remote-wsl*",
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

// basicShellCommand()
longRunningCommand()
// spawnStdin()
// findMs();
// kill()
