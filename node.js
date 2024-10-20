const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];


 const fs = require('fs')

 fs.writeFile('test.txt','',(err)=>{
    if(err) throw err;
    console.log("created")
})

 fs.readFile('text.txt', 'utf-8' ,(err, data)=>{
    if(err) throw err;
    console.log(data);

})

const newText = 'i love nodejs'
fs.appendFile('text.txt', newText + '\n', (err,data) => {
    if (err) {
        console.error(`Error appending to file: ${err}`);
    } else {
        console.log(`Content appended to the file '${data}'`);
    }
});

fs.rename('test.txt','text1.txt',(err)=>{
    if(err) throw err;
    console.log(`'text.txt' is replace by text1.txt`)
})

fs.unlink('text1.txt',(err)=>{
    if(err) throw err;
    console.log( "deleted")
})




const fileName = 'text1.txt'

fs.readdir(process.cwd(), (err,fileName)=>{
   if(err) throw err;
   console.log(fileName)
})
switch (operation) {
  // complete the fillowing function.
  case "create" :
      createFile('text.txt');
      break;
   case "read" :
       readFile('text.txt');
       break;
    case "append":
        appendFile('text.txt',newText)
        break;
    case "rename":
        renameFile('text.txt','text1.txt')
        break;
    case "delete":
        deleteFile('text1.txt')
        break;
    case "readDir":
        readDir()
        break;
    
  default:
    console.log(`Invalid operation '${operation}'`);
}
