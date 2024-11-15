console.log("Hello, TypeScriptdssss!");
var user = {
    name: "Jonas",
    isMarried: true,
    age: 525,
};
var user2 = {
    name: "Jonas",
    age: 15,
};
function logUser(user) {
    return user.age > 18 ? true : false;
}
function logUser2(user) {
    return user.age > 18 ? true : false;
}
function logUser3(user) {
    return user.age > 18 && user.age < 50
        ? "normalus"
        : user.age < 18
            ? "jaunas"
            : "senas";
}
console.log(logUser(user));
console.log(logUser2(user2));
console.log(logUser3(user));
var user3 = {
    name: "Daniel",
    isMarried: true,
    age: 26,
};
console.log(user3);
var announcement = "Hello World!";
announcement.toLocaleLowerCase();
function flipCoin() {
    // Meant to be Math.random()
    return Math.random() < 0.5;
}
var value = Math.random() < 0.5 ? "a" : "b";
if (value === "a") {
    console.log("taip");
}
else if (value === "b") {
    console.log("Ne");
}
