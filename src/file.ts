import fs from 'fs';


export const getFilePath=(folderName:string)=>{
    const allFilesAndFolders=fs.readdirSync(folderName);
    allFilesAndFolders.forEach((fileOrFolder)=>{
        console.log(fileOrFolder);
    }
    )
}
