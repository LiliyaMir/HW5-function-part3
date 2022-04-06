console.log('_____________#4b')
function range(a, b) {
  if (a<b) {
    if (a == b) {
      return; 
    }
    console.log(a);
    range(a+1, b);
  }
  else if (a>b) {
    if (a == b) {
      return;
    }
    console.log(a);
    range(a-1, b);
  }
  else {
    console.log(a);
  }
}
range(2, 8);
console.log(' ');
range(8, 2);

// console.log('_____________#5')
var time = setInterval(function() {
  timer();
}, 1000);

function timer() {
  var clock = new Date();
  document.getElementById("clock").innerHTML = clock.toLocaleTimeString();
}


