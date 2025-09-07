const fs = require("fs");

fs.writeFileSync("./text.txt", "Hello Souvik");


fs.writeFileSync("./doc.txt", "Doc to be create", (err) => {
    if(err) return err;
});

const result2 = fs.readFileSync("./text.txt", "utf-8");
console.log(result2);

fs.readFile("./doc.txt", "utf-8", (err, data) => {
    if(err){
        console.error(err);
    } else {
        console.log(data);
    }
})
