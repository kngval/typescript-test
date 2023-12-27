
//initialize a type
type Customer = {
    birthday?: Date
}


// if customer's id id truthy then return the date, if not then return null
function getCustomerBirthday(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday : new Date() }
}

let customer = getCustomerBirthday(1)

//optional operator used
//execute only if customer is truthy and it has a birthday 
console.log(customer?.birthday?.getFullYear())
