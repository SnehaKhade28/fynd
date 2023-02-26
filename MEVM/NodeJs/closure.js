//var:global csope
//require:import the module
//module:alert
//npm install alert
//function1-over/parent 
var alert=require('alert');
 function init()                
{//initialization
    var name ='Chrome'; // name is a local variable created by init
    function displayName() { // displayname is the inner function, a closure
        //excution:output
        alert (name);
        //use variable declared in the parent function,body of child function
    }
    //declaring a function doesnot call it
    //so we are calling it explicityly here
    displayName(); // inner/ closure/child function

}
init();
//displayname():- outer function call will not achieve the purpose of closure
//purpose of closure is to
// call multiple inner function by just one outer function
