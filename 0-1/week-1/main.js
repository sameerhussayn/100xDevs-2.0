console.log('Hello World')

// print even numbers of Array
const array = [1, 2, 3, 4, 5,6];
function printEven(){
    for(let i=0;i<array.length;i++){
        if(array[i]%2 ===0) console.log(array[i])
    }
}

// printEven();

function bigNum(arr){
    let bigNum = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > bigNum){
            bigNum = arr[i]
        }
    }
    console.log(bigNum);
}

// bigNum(array)

//printing only male users
const userList = [{name: 'John', gender:'male'},{name: 'Jane',gender:'female'}, {name: 'harkirat', gender: 'male'}]

function printMaleUsers(users){
    for(let i=0;i<users.length; i++){
        if(users[i].gender === 'male') 
            console.log(users[i].name)
    }
}
// printMaleUsers(userList)

function sum(num1, num2, fnToCall){
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data){
    console.log(`Result of the sum is: ${data}`)
    
}

function displayResultPassive(data){
    console.log('Sum\'s result is : ' + data)
}

sum(10, 15, displayResultPassive)