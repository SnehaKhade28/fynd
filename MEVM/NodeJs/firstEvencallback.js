const fs=require("fs");

/**
*@param {Error} error
*@param {bufer} fileData
*@returns void
*/
function readFirstFiveCallback(error,filedata){
if(error){
console.error(error);
return;
}
//converting the ileData which is bufer to string and splitting by line.
const Lines=fileData.toString().split("\n");
Lines.slice(0,5).forEach((line) => {
console.log(line);
});
}
//function call with callback
fs.readFile("C:\Users\Dell\Documents\GitHub\fynd\MEVM\NodeJs\tenevenNumber.txt",readFirstFiveCallback);