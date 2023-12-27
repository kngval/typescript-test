
function convert(weight: number | string ): number{ //union type number or string but this supposed to return a number/int

    //narrowing

    if(typeof weight === 'number'){
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2

}

console.log(convert(10))
console.log(convert('10kg'))