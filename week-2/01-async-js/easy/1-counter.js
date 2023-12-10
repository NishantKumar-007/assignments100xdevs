var counter = 0;
function doSomething() {
  console.log(counter++);
}

setInterval(doSomething, 1000);
