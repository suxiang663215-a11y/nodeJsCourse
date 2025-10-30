console.log("Start");

setTimeout(() => {
  console.log("Timeout 1", 50); // 延迟时间 50 毫秒
  setTimeout(() => {
    console.log("Timeout 5", 50);
  }, 50);
}, 50);

setTimeout(() => {
  console.log("Timeout 2", 100); // 延迟时间 100 毫秒
  setTimeout(() => {
    console.log("Timeout 4", 0);
  }, 0);
}, 100);

setTimeout(() => {
  console.log("Timeout 3", 0); // 延迟时间 0 毫秒
  setTimeout(() => {
    console.log("Timeout 6", 300);
  }, 300);
}, 0);

console.log("End");
