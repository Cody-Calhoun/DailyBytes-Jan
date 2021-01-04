// Jan 1: Ternary Operator

condition ? expressionIfTrue : expressionIfFalse

Traditional IF/ELSE
let year = 2021
if (year == 2020) {
    console.log("0 of 5 stars. Do not recommend.");
}
else {
    console.log("New year, new me.");
}

// Ternary Operator
let newYear = 2021
                //  condition  ?    expressionIfTrue               :  expressionIfFalse;
let yearCheck = (newYear == 2020) ? "0 of 5 stars. Do not recommend." : "New year, new me.";
console.log(yearCheck);

// Jan 2: .push() function

let test = [1, 3, 5, 3, 6];
console.log(test.push(7));
console.log(test);

// Jan. 3: .pop() function

let example = [2,4,5,3,6,7]
console.log(example.pop())
console.log(example);
