console.log("code1");
console.time("timeout 0");
setTimeout(() => {
  console.log("setTimeout 0");
  console.timeEnd("timeout 0");
}, 0);

console.log("code2");
console.time("setImmediate Time");
setImmediate(() => {
  console.log("setImmediate");
  console.timeEnd("setImmediate Time");
});

console.log("code3");
process.nextTick(() => {
  console.log("process.nextTick");
});
