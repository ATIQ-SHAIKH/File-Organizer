let fs = require("fs");
const path = require("path");

function inp_dir(dir_path){
    if (dir_path == undefined){
        dir_path = process.cwd();
    }
    return dir_path;
}

module.exports = {
    inp_dir:inp_dir
}