"use strict";
function convert(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
convert(10);
convert('10kg');
//# sourceMappingURL=unionTypes.js.map