// 03 – OPERATORS
// ----------------------------------------------
// This file contains ONLY instructions (comments).
// Your job is to turn each instruction into real code.
// Remember: open the console to see your results!

// ==============================================
// TASK 1 – BASIC ARITHMETIC
// ==============================================

// STEP 1: Create two number variables, a and b,
//         and assign them any number values you like.

// STEP 2: Use console.log to show the result of:
//         a + b   (addition)

// STEP 3: Use console.log to show the result of:
//         a - b   (subtraction)

// STEP 4: Use console.log to show the result of:
//         a * b   (multiplication)

// STEP 5: Use console.log to show the result of:
//         a / b   (division)

// STEP 6: Use console.log to show the result of:
//         a % b   (remainder after division)

// STEP 7: For each console.log, include a label so you know what you are seeing.
//         Example idea: console.log("a + b =", a + b);

const a = 7;
const b = 9;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// ==============================================
// TASK 2 – UPDATING A VALUE OVER TIME
// ==============================================

// Imagine you have some money saved and it changes over time.

// STEP 8: Create a variable called savings and give it a starting amount (number).

// STEP 9: Use the += operator to add some money to savings
//         (for example, a paycheck).

// STEP 10: Log the new value of savings with a clear message,
//          like "After paycheck, savings = ..."

// STEP 11: Use the -= operator to subtract an amount
//          (for example, buying groceries).

// STEP 12: Log the value of savings again with a clear message,
//          like "After groceries, savings = ..."

let savings = 1000;

savings += 500;
console.log(`After paycheck, savings = ${savings}`);

savings -= 300;
console.log(`After groceries, savings = ${savings}`);

// ==============================================
// TASK 3 – ORDER OF OPERATIONS
// ==============================================

// STEP 13: Create a variable called resultOne and set it equal to:
//          5 + 3 * 2
//          (Write the expression directly, without extra parentheses.)

// STEP 14: Create a variable called resultTwo and set it equal to:
//          (5 + 3) * 2
//          (Use parentheses here.)

// STEP 15: Log both resultOne and resultTwo with clear messages,
//          and notice how the answers are different.

let resultOne = 5 + 3 * 2;
let resultTwo = (5 + 3) * 2;

console.log(`Result One: ${resultOne} \nResult Two: ${resultTwo}`);

// ==============================================
// TASK 4 – USING + WITH STRINGS
// ==============================================

// STEP 16: Create a variable called baseTotal with a number value,
//          for example the result of 10 + 5.

// STEP 17: Use console.log with string concatenation to print a message like:
//          "Base total is: " + baseTotal

// STEP 18: Now create a variable called totalMessage that uses a template literal
//          to say the same thing, for example:
//          `Base total is: ${baseTotal}`

// STEP 19: Log totalMessage to the console.

let baseTotal = 10 + 5;

console.log("Base total is: " + baseTotal);
console.log("Base total is: ", baseTotal);
console.log(`Base total is: ${baseTotal}`);
