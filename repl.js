const repl = require('repl')

const user = 'jim'
const local = repl.start(`${user}$ `);
local.on('exit', () => {
    console.log('exiting...');
    process.exit();
  });