let fs = require("fs");
let path = require("path");

function helpfn(){
    console.log(`
    List of all commands:
        peppy tree <dir_path>
        peppy organize <dir_path>
        peppy help
    `);
}

module.exports={helpKey: helpfn} 