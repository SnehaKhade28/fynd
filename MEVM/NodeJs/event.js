var fs = require('fs'); //import statement
//it imports the filestream from the node modules
//fs=filestream is an inbuilt module
//module:
// collection of functionalities which are nnot user sreated bit available from node js

var rs = fs.createReadStream('./demofile.txt'); //means path
// var is a shortform for variable used to store local variable /temporary values
//reading the outside placed demotext file
//event = action performed


rs.on('open', function (){
    console.log('the file is open');
});