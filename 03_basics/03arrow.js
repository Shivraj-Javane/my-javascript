const user = {
    username: "shivraj",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "shivraj"
// user.welcomeMessage()

// console.log(this);

// function one (){
//     let username = "shivraj"
//     console.log(this.username);
// }
// one()

// function one = function(){
//     let username = "shivraj"
//     console.log(this.username);

// }

const one = () => {
    let username = "shivraj"
    console.log(this);
}
// one()

// const addTwo =(num1, num2) => {
//     return num1 + num2
// }

// const addTwo =(num1, num2) => num1 + num2
// const addTwo =(num1, num2) => (num1 + num2)

const addTwo =(num1, numw2) => ({username: "shivraj"})

console.log(addTwo(3, 4));