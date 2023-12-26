

function calculate(allowance :number , age:number):number{

    if(age < 18){
        return allowance * 0 
    }
    return allowance * 10;
}

calculate(100, 21)
