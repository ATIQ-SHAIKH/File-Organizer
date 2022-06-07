let fs = require("fs");
let path = require("path");
let utility = require("../src/utility");
let types = utility.types;
let destPath;

function organizefn(dirPath){
    if (dirPath == undefined){
        dirPath = process.cwd();
        organizefn(dirPath);
    }else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            console.log("Working....")
            destPath = path.join(dirPath, "organized_files");
            if (fs.existsSync(destPath) == true){
                console.log("Organize folder already exists!")
            } else {
                fs.mkdirSync(destPath);
                console.log("Organize folder created!")
            }
        } else {
            console.log("Kindly Enter The Correct Path!")
            return;
        }
    }
    organizeHelper(dirPath, destPath);
}

function organizeHelper(dirPath, destPath){
    let childNames = fs.readdirSync(dirPath);
    console.log("Initiating process...")
    for (let i=0; i<childNames.length; i++){
        let childAddress = path.join(dirPath, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile){
            let category = getCategory(childNames[i])
            // console.log(childNames[i],"belongs to --->",category)
            sendFiles(childAddress,destPath,category)
        }
    }
}

function getCategory(name){
    let ext = path.extname(name).slice(1);
    // console.log(ext)
    for(let type in types){
        let cTypeArray = types[type];
        for(let i=0; i<cTypeArray.length; i++){
            if(ext == cTypeArray[i]){
                return type;
            }
        }
    }
    return "Other"
}

function sendFiles(childAddress, destPath, category){
    let categoryPath = path.join(destPath, category);
    if(fs.existsSync(categoryPath) == false){
        fs.mkdirSync(categoryPath);
    }
    let filename = path.basename(childAddress);
    let destfilepath = path.join(categoryPath, filename);
    fs.copyFileSync(childAddress,destfilepath);
    // fs.unlinkSync(childAddress);
    console.log(filename,", copied!");
}

module.exports ={organizeKey:organizefn} 
