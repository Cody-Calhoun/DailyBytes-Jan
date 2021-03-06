// Jan 1: Ternary Operator

// condition ? expressionIfTrue : expressionIfFalse

// Traditional IF/ELSE
// let year = 2021
// if (year == 2020) {
//     console.log("0 of 5 stars. Do not recommend.");
// }
// else {
//     console.log("New year, new me.");
// }

// Ternary Operator
// let newYear = 2021
//  condition  ?    expressionIfTrue               :  expressionIfFalse;
// let yearCheck = (newYear == 2020) ? "0 of 5 stars. Do not recommend." : "New year, new me.";
// console.log(yearCheck);

// Jan 2: .push() function

// let test = [1, 3, 5, 3, 6];
// console.log(test.push(7));
// console.log(test);

// Jan 3: .pop() function

// let example = [2,4,5,3,6,7]
// console.log(example.pop())
// console.log(example);

// Jan 4: == vs ===

// const year = "2021";
// year == 2021
//   ? console.log("New year new me")
//   : console.log("muct be strictly typed");

// Jan 5: Truthy or Falsy
// const result = 0 == "";
// console.log(result);
// console.log(Boolean(""));
// console.log(Boolean(0));

// Jan 6: Simple ForLoop
const exampleOne = [1, 3, 4, 5, 7, 9, 2];
const exampleTwo = [1, 5, 4, 8, 6, 7];
// Traditional
for (let i = 0; i < exampleOne.length; i++) {
  console.log(exampleOne[i]);
}
// Simplified ** note, you can use "in" or "of"
for (var j in exampleTwo) {
  console.log(exampleTwo[j]);
}
