//use of recursion
let counter = 0;
function doSomething() {
  console.log(counter++);
  setTimeout(doSomething, 1000);
}
doSomething();
