const { exec, spawn } = require("child_process");

async function checkUpdate() {
    console.log('checkUpdate');
    // bash ../shell/install.sh
    exec('cd ./shell && dir', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            throw error
            // return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
    // start the `ping google.com` command
    // const command = spawn("../shell/install.sh");
    // const res = await vscode.commands.executeCommand('ls')
    // console.log('res', res)
    // const command = spawn("ls");
    // // output from the command
    // command.stdout.on("data", (output: any) => {
    //   // the output data is captured and printed in the callback
    //   console.log("Output: ", output.toString());
    // });
}
checkUpdate();