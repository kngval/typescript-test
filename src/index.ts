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