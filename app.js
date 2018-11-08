console.log('Starting app.;')

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')
var res = notes.add(2,3);
console.log(res);
 var user = os.userInfo();

fs.appendFile('helloWorld.txt',`hello ${user.username} !`,(err) => {
    if (err) throw (err)
});


