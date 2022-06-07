#!/usr/bin/env node

let helpObj = require("../commands/help.js");
let treeObj = require("../commands/tree.js");
let organizeObj = require("../commands/organize")

let input = process.argv.slice(2);
// console.log(input)

let command = input[0];
let types = {
    media: ["mp4", "mkv"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: ["docx", "doc", "pdf", "xlsx", "xls", "odt", "ods", "odp", "odg", "odf", "txt", "ps", "tex"],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

switch (command){
    case "tree":
        treeObj.treeKey(input[1]);
        break;
    case "organize":
        organizeObj.organizeKey(input[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Invalid Command!");
        break;
}









