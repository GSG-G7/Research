const fs = require('fs');

const path = `${__dirname}/${process.argv[2]}`;
const readStream = fs.createReadStream(path);

// Write to textFile.txt

// let all = '',count = 1;
// for(let i = 0;  i < 200000 ; ++i){
//   all +=`${count} Fadi Faris Mohammed Mai \n`;
//   count += 1;
// }

// fs.writeFile(path,all,(err) => {
//   if(err) throw err;
//   console.log(all);
// })

// Read textFile
let data = '';
readStream.setEncoding('UTF8');
setInterval(() => {
  readStream.resume();
  readStream.on('data',(chunk) => {
    data += chunk;
    
    const timeBefore = Date.now();
    process.stdout.write(chunk);
    const timeAfter = Date.now();
    
    console.log('\n');
    console.log(timeBefore);
    console.log(timeAfter);
    
    const difference = timeAfter -timeBefore;
    console.log(`Difference ${difference}`);
    readStream.pause();
    
  })
}, 3000);