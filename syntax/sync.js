const fs = require('fs');
//readfilesync
console.log("Sync");
console.log('A');
var result = fs.readFileSync('syntax/sample.txt','utf8');
console.log(result);
console.log('C');
//readfileasync 
console.log("aSync");
console.log('A');
fs.readFile('syntax/sample.txt','utf8',(err,result)=>
{
    console.log(result);
});
console.log('C');