const fs = require("fs");

//asynchronus operation - completely rewrites file content
fs.writeFile("demoFile.txt", "writing some random quote", function (err) {
  console.log("Text Written");
});
let a = 0;
for (let index = 0; index < 10000; index++) {
  a++;
}

fs.appendFile("demoFile.txt", "adding another random quote", function (err) {
  console.log("successfully updated file");
});
console.log(a);
