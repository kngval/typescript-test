"use strict";
function convert(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
console.log(convert(10));
console.log(convert('10kg'));
//# sourceMappingURL=unionTypes.js.map