function helpfn(){
    console.log(`
    List of all commands:
        peppy tree <dir_path> : Gives the tree structure of current directory.
        peppy organize <dir_path> : Organizes the directory w.r.t media, docs, etc
        peppy help : For help
    -------------------------------------------------------------------------------
    Note:- If directory path is not given with command peppy will consider current 
    working path as directory path.
    `);
}

module.exports={helpKey: helpfn} 