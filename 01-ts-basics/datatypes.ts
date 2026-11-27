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


// Array exercise 

// 1. Create an array called cities with 3 city names. Give it the correct type.
const cities : Array<string> = ['chennai',"ngl","cbe"]
console.log('cities :>> ', cities); //cities :>>  [ 'chennai', 'ngl', 'cbe' ]

// 2. Create an array called prices holding 250, 99.5, and 1200. Then add 500 to it.
const priceList: Array<number> =  [250,99.5,1200]
priceList.push(500)
console.log('priceList :>> ', priceList); //priceList :>>  [ 250, 99.5, 1200, 500 ]


// 3. What is the type TypeScript infers here? Hover in VS Code to check after you guess.
const flags = [true, false, true];
// const flags:Array<boolean> = [true, false, true];

// 4. Print the first and last item of cities (without typing the index of the last one directly, use length).
const printCities : Array<string> = ['chennai',"ngl","cbe"]
console.log('First city:', printCities[0]);//First city: chennai
console.log('Last city:', printCities[printCities.length - 1]); //Last city: cbe


// 5. Use a for...of loop to print every price in prices.
const printPrice: Array<number> =  [250,99.5,1200,500]
for (const price of printPrice)  {
console.log('price :>> ', price);
}
// price :>>  250
// price :>>  99.5
// price :>>  1200
// price :>>  500


// 6. Use map to create a new array where every price in prices is doubled.
const prices: Array<number> =  [250,99.5,1200,500]
const doubledPrice : Array<number> = []
prices.map((item)=>doubledPrice.push(item*2))
console.log('doubledPrice :>> ',doubledPrice ); //doubledPrice :>>  [ 500, 199, 2400, 1000 ]
// 7. Use filter to keep only the prices greater than 200.
const filteredItem : Array<number> = prices.filter(item=>item<200)
console.log('filteredItem :>> ',filteredItem );//filteredItem :>>  [ 99.5 ]
//8. Use reduce to find the total of all prices.
const addPrice: number = prices.reduce((total, item) => total + item, 0);
console.log('addPrice :>> ', addPrice); //addPrice :>>  2049.5

// 9. Create an array called codes that can hold both numbers and strings, e.g. 101, "X20", 305.
const codes : Array<number|string>  = [200,300,"30000",800]
console.log('codes :>> ', codes); //codes :>>  [ 200, 300, '30000', 800 ]


// 10. Create an array of student objects, where each student has a name (string) and marks (number). 
// Add at least 3 students. Then use map to get an array of only the names.
interface studentsData {
  name:string,
  mark:number
}
const student : studentsData[] = [
  {name:"pavi",mark:2010},{name:"abcd",mark:2300},{name:"fefef",mark:2060},{name:"parerervi",mark:5200},]
  const studNames: string[] = student.map(item=>item.name)
  console.log('studNames :>> ', studNames); //studNames :>>  [ 'pavi', 'abcd', 'fefef', 'parerervi' ]


// 11. Predict the output, and explain why TypeScript doesn't show an error:
const nums: number[] = [5, 10, 15];
console.log(nums[7]); // undefined becz if there is no value ts defaulty set as undefined


// 12. Will each line work or cause an error? Explain why.
const animals = ["cat", "dog"];
animals.push("cow");
animals[0] = "lion";
// animals = ["tiger"];
// 13. Make the animals array so that push gives an error, but reading animals[0] still works.



// 14. Predict the output:
const scores = [100, 25, 3, 40];
scores.sort();
console.log(scores); //[100,25,3,40]
// Then fix the code so it sorts from smallest to largest correctly.
const correctScores: number[] = [100, 25, 3, 40];
correctScores.sort((a, b) => a - b);
console.log(correctScores);//[ 3, 25, 40, 100 ]

// 15. What's the type of result here? Why does the last line cause an error, and how do you fix it?
const ages = [18, 25, 30];
const ageResult = ages.find((a) => a > 50);
// console.log(ageResult.toString()); //becz its JS  ageResult is array 
//corrected code 
const correctedAge: Array<number>= [18, 25, 30]
console.log('correctedAge.find((a)=>a>50) :>> ', correctedAge.find((a)=>a>50)); //undefined