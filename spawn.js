var exec = require('child_process').exec; 
var cmdStr = "ls";
exec(cmdStr, function(err,stdout,stderr){
    if(err) {
        console.log('error:'+stderr);
    } else {
        console.log('args stdout:'+stdout);
    }
});