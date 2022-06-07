let fs = require("fs");
let path = require("path");

function treeFn(dirPath){
    if (dirPath == undefined){
        treeHelper(process.cwd(),"")
        return;
    }else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            treeHelper(dirPath,"");
        } else {
            console.log("Kindly Enter The Correct Path!")
            return;
        }
    }
}

function treeHelper(dirPath, indent){
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile){
        let filename = path.basename(dirPath);
        console.log(indent+"├──"+filename);
    } else {
        let dirName = path.basename(dirPath)
        console.log(indent+"└──"+dirName);
        let childs = fs.readdirSync(dirPath);
        for(let i=0; i<childs.length; i++){
            let childPath = path.join(dirPath, childs[i]);
            treeHelper(childPath, indent+"\t");
        }
    }
}

module.exports={treeKey: treeFn}