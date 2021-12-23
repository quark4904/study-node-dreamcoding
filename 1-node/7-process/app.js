const { time, timeEnd } = require("console");
const process = require("process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
  console.log("setTimeout");
}, 0);

process.nextTick(() => {
  // next tick: task queue 제일 앞으로 간다.
  console.log("nextTick");
});

console.time("start");
let sum = 0;
for (let i = 0; i < 1000000000; i++) {
  sum += i;
}
console.timeEnd("start");
