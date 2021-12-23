const fs = require("fs");

// 3
// rename(...., callback(error, data))
// try { renameSync(....) } catch(e) { }
// promises.rename().then().catch(0)

try {
  fs.renameSync("./text.txt", "./text-new.txt");
} catch (error) {
  console.error(error);
}
console.log("hello1");

fs.rename("./text-new.txt", "./text.txt", (error) => {
  console.log(error);
});
console.log("hello2");

fs.promises
  .rename("./text2.txt", "./text-new.txt") //
  .then(() => console.log("Done!"))
  .catch(console.error);
console.log("hello3");
