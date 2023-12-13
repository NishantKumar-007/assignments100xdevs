const fs = require("fs");

//asynchronus operation
fs.readFile("demoFile.txt", "utf-8", function (err, data) {
  console.log(data);
});
let a = 0;
for (let index = 0; index < 10000; index++) {
  a++;
}
console.log(a);
