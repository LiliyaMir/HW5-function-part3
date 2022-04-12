console.log('_____________#4b')
function range(a, b) {
  if (a<b) {
    range(a+1, b);
  }
  else if (a>b) {
    range(a-1, b);
  }
  console.log(a);
}
range(2, 8);
console.log(' ');
range(8, 2);

// console.log('_____________#5')
setInterval(timer, 1000);

var clockB = document.getElementById("clock");
function timer() {
  var clock = new Date();
  clockB.innerHTML = clock.toLocaleTimeString();
}


