
function oddOrEven(x) {
    return ( x & 1 ) ? "odd" : "even";
  }
  
  function checkNumber(argNumber) {
    document.getElementById("result").innerHTML = "Number " + argNumber + " is " + oddOrEven(argNumber);
  }
   
  checkNumber(1);

var a = require("mathematics");
function evenOdd(n){
    if((n % 2) === 0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    } 
}

evenOdd(2);
evenOdd(5);

