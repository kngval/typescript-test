console.log('Hello TS')

//TS Data types
// annotating data types is optional since typescript does it for you already.

let sales :number = 123_123_123;
let title :string = 'TS Practice';
let is_Finished : boolean = false;
let sample; // any type


//function that takes any data type as parameter
function anyType(params: any){
    console.log(params);
}

//TS Arrays
//again, specifying data types is optional in this case, ts already does it for you
let numbers :number[] = [1,2,3,4,5] //Only numbers are allowed, otherwise it will throw an error


//but there are also cases like this
let number = [] // the data type here is any, and we should avoid that by specifying the data type in this case a number
number[0] = 1;
// number[1] = '1'  //this will throw an error

numbers.forEach(i => i.toLocaleString) // TS intellisense depends on the data type


