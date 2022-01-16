const fs = require("fs");

// method 1
// const readStream = fs.createReadStream("./file.txt", {
//   //   highWaterMark: 8, // 64 kbytes
//   encoding: "utf-8",
// });

// const data = [];
// readStream.on("data", (chunk) => {
//   //   console.log(chunk);
//   data.push(chunk);
//   console.count("data");
// });

// readStream.on("end", () => {
//   console.log(data.join(""));
// });

// readStream.on("error", (error) => {
//   console.log(error);
// });

// method 2 - chainring
const data2 = [];
fs.createReadStream("./file.txt", {
  highWaterMark: 16, // 64 kbytes
  encoding: "utf-8",
})
  .once("data", (chunk) => {
    //   console.log(chunk);
    data2.push(chunk);
    console.count("data");
  })
  .on("end", () => {
    console.log(data2.join(""));
  })
  .on("error", (error) => {
    console.log(error);
  });
