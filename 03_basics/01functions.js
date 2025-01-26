
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
console.log(loginUserMessage())