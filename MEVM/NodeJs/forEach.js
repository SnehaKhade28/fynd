const arr=['giraffe','tiger','lion'];//homogeneous data
const arr2=[1,2,3,4];//homogeneous data
arr.push('cheetah');//adding elements to an array using push function
arr2.push(6);

arr.forEach(element=>{
    console.log(element);
});

arr2.forEach(element=>{
    console.log(element);
});

const fruits=['banana','orange'];
fruits.unshift('apple');//will add element in the beginning of array
console.log(fruits);
console.log(findFruit('banana'));


//fruits.findIndex(findFruit('apple'));//error
fruits.findIndex();

function findFruit(friut){
    return fruits=="banana";
}

const ages=[6,2,3,4];
ages.findIndex(checkAge);
ages.sort();//ascending
ages.reverse();//desecending after asc in the previous line

function checkAge(age){
    return age>3;
}

const cars=["bmw","mercedes"];
const car={type:"fiat",model:"400",color:"white"};//name:value pairs
//use this while matching tha data to documents of mongo

