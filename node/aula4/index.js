const fs =  require('fs').promises;
const path = require ('path');


async function readdir(){ 
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files);

}

async function walk(files){
    for(let files of files){
        const stats = await fs.stat();
        console.log(files);
    }
};

readdir();

