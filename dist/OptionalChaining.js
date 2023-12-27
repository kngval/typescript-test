"use strict";
var _a;
function getCustomerBirthday(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomerBirthday(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=OptionalChaining.js.map