const fs = require("fs").promises;

// read a file
fs.readFile("./text.txt", "utf8")
  .then((data) => console.log(data))
  .catch(console.error);

//   writing a file
fs.writeFile("./text.txt", "Yo, Dream Coder!") //
  .catch(console.error);

fs.appendFile("./text.txt", "Yo, Dream Coder! :)")
  .then(() => {
    //   copy
    fs.copyFile("./text.txt", "text2.txt") //
      .catch(console.error);
  }) //
  .catch(console.error);

// 비동기가 모여 있으면 순차적으로 될 수도 있고 안될 수도 있으므로
//   순서대로 진행해야 될 필요가 있는 코드는 동기 코드를 적용해야 한다.

//folder
fs.mkdir("sub-foler") //
  .catch(console.error);

// readdir
fs.readdir("./") //
  .then(console.log)
  .catch(console.error);
