const fs = require("fs");

// cal
const beforeMem = process.memoryUsage().rss;
fs.readFile("./file.txt", "utf8", (_, data) => {
  fs.writeFile("./file2.txt", "utf8", data, () => {});
  //  calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Comsumed Memory: ${consumed}MB`);
});
