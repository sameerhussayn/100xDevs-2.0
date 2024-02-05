interface User{
    firstName:  number,
    lastName: string,
    age: number,
    email?: string
}

function isLegal1(user: User):boolean{
    return user.age >= 18
}

console.log(isLegal1({
    firstName: 55,
    lastName: 'hussain',
    age:19
}))

function maxValue(arr:number[]):number{

}