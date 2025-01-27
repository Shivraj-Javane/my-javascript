
function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("R");
    console.log("A");
    console.log("J");
    
}

// sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
    
}

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2

    
}

const result = addTwoNumbers(3, 4)

// console.log("result :", result);


function loginUserMessage(username = "raj"){
    if(!username === undefined){
        console.log("please enter a username"); 
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("shivraj"))
// console.log(loginUserMessage("shivraj"))


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "shivraj",
    prices: 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "raj",
    price: 499
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
