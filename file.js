const fs = require("fs");
const os = require("os");

// fs.writeFileSync("./text.txt", "Hello Souvik");


// fs.writeFile("./doc.txt", "Doc to be create", (err) => {
//     if(err) return err;
// });

// const result2 = fs.readFileSync("./text.txt", "utf-8");
// console.log(result2);

// fs.readFile("./doc.txt", "utf-8", (err, data) => {
//     if(err){
//         console.error(err);
//     } else {
//         console.log(data);
//     }
// });

// ************************* 

// fs.appendFileSync("./text.txt", `${Date.now()} Hey There\n`);

// fs.copyFileSync("./text.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

console.log(os.cpus().length);

