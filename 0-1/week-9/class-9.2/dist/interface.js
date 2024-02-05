"use strict";
function isLegal1(user) {
    return user.age >= 18;
}
console.log(isLegal1({
    firstName: 55,
    lastName: 'hussain',
    age: 19
}));
