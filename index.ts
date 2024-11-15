console.log("Hello, TypeScriptdssss!");
interface User {
  name: string;
  isMarried: boolean;
  age: number;
}
interface User2 {
  name: string;
  age: number;
}

const user: User = {
  name: "Jonas",
  isMarried: true,
  age: 525,
};
const user2 = {
  name: "Jonas",
  age: 15,
};
type MyBool = true | false;
type AmziausState = "jaunas" | "senas" | "normalus" | "labai senas";

function logUser(user: User): MyBool {
  return user.age > 18 ? true : false;
}
function logUser2(user: User2): MyBool {
  return user.age > 18 ? true : false;
}
function logUser3(user: User): AmziausState {
  return user.age > 18 && user.age < 50
    ? "normalus"
    : user.age < 18
    ? "jaunas"
    : "senas";
}
console.log(logUser(user));
console.log(logUser2(user2));
console.log(logUser3(user));

const user3: User = {
  name: "Daniel",
  isMarried: true,
  age: 26,
};
console.log(user3);

const announcement = "Hello World!";

announcement.toLocaleLowerCase();
function flipCoin() {
  // Meant to be Math.random()
  return Math.random() < 0.5;
}
flipCoin();
const value = Math.random() < 0.5 ? "a" : "b";
if (value === "a") {
  console.log("taip");
} else if (value === "b") {
  console.log("Ne");
}

function greet(person: string, date: Date) {
  console.log(
    "Hello ".concat(person, ", today is ").concat(date.toDateString(), "!")
  );
}

greet("Maddison", new Date());
console.log(new Date());

const msg: string = "hello there!";
console.log(msg);

function greet2(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
greet2("42");

async function getFavoriteNumber(): Promise<number> {
  return 26;
}
async function main() {
  const favoriteNumber = await getFavoriteNumber();
  console.log(favoriteNumber);
}

// main();
const names: string[] = ["Alice", "Bob", "Eve"];

// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});
console.clear();

interface coord {
  x: number;
  y: number;
}
const coordinates: coord = {
  x: 333,
  y: 9,
};

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord(coordinates);

function printName(obj: { first: string; last?: string }) {
  //su klaustuku neprivalomas params
  console.log(obj.first);
}

printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

printId("sdaf");
function printId2(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printId2("sdaf");

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

welcomePeople("yolo");
welcomePeople(["Yolo", "Fella", "Mista"]);

function welcomePeople2(x: string[] | string) {
  console.log(x);
}
console.log(welcomePeople2("asd"));

welcomePeople2("yolo");
welcomePeople2(["Yolo", "Fella", "Mista"]);

type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord2(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord2({ x: 100, y: 100 });
interface Pointer {
  x: number;
  y: number;
}

// Exactly the same as the earlier example
function printCoord3(pt: Pointer) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord3({ x: 110, y: 110 });
