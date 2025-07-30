//  Singleton

//  object literals
const JsUser = {
    name: "Atiqur",
    age: 18,
    location: "Cumilla",
    email: "atik@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Satarday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting())