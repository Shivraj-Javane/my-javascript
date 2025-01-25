// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shivraj",
    "full name": "Shivraj Javane",
    [mySym]: "mykey1",
    age: 25,
    location: "Pune",
    email: "shivraj@google.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "shivraj@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "shivraj@yahoo.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}


JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



