const fs = require("fs");

let str = "";
fs.readFile("a.txt", "utf-8", function (err, data) {
  str = data.replace(/\s+/g, " ");
  console.log(str);
  fs.writeFile("a.txt", str, function () {
    console.log("file updated");
  });
});
