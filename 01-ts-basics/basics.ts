// Exercise 1: Declare variables

// Create variables with the correct types for a student profile:

// the student's name: "Ravi" (it never changes)
const student_name : string = "Ravi"
// the student's age: 20 (it will change next year)
let student_age : number = 20
// whether they have graduated: false
let graduated : boolean = false
// their middle name, which they don't have yet, so it's null for now but could become a string later
let middle_name : string|null = null


// Exercise 2: Find the errors

// Each line below has a type error. Explain why, then fix it.

let score: number = "95";  //that dataType is number but assigned value is string 
const country: string = "Kenya"; 
// country = "Uganda"; // here declaarare another country is assigined but type is const so its wrong instead of const use let 
let isActive: boolean = "true";  //that dataType is boolean but assigned value is string 
let nickname: string = null;   //that dataType is string  but assigned value is null so we can use | null also  



// Exercise 3: Predict the output

// What does each console.log print, or does it cause an error?

console.log(typeof "hello"); //string
console.log(typeof 42); //number
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof 10n);  //bigint
console.log(Symbol("a") === Symbol("a")); //false const s1 = Symbol("a");
const s2 = Symbol("a");
const s1 = Symbol("a");
console.log(s1 === s2); // false
console.log(s1 === s1); // true (same symbol compared to itself)


// Exercise 4

function describePerson(name: string, age?: number): string {
  if (age !== undefined) {
    return `${name} is ${age} years old`;
  }
  return `${name}'s age is unknown`;
}
console.log(describePerson("Pavi",20))
console.log(describePerson("Pavi"))

// Note: if (age !== undefined) is better than if (age), because if (age) would wrongly treat an age of 0 as missing.


// Exercise 5

const big: bigint = 9007199254740992n;
const result = big + 10n; // must add a bigint, not 10
console.log(result);      // 90071992547401002n