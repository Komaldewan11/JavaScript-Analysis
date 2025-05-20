// Calculator Functions
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot be divided by zero";
    }
    return a / b;
}

//Fixed Test Cases
console.log("Fix Addition Test 1:", add(5, 3) === 8 ? "Pass" : "Fail");
console.log("Fix Subtraction Test 1:", subtract(10, 4) === 5 ? "Pass" : "Fail"); // Corrected expected value
console.log("Fix Multiplication Test 1:", multiply(7, 6) === 42 ? "Pass" : "Fail");
console.log("Fix Division Test 1:", divide(12, 4) === 3 ? "Pass" : "Fail");
console.log("Non-Integer Division Test:", divide(7, 2) === 3.5 ? "Pass" : "Fail");

//Zero inputs
console.log("Zero Addition Test 1:", add(5, 0) === 5 ? "Pass" : "Fail");
console.log("Zero Subtraction Test 1:", subtract(10, 0) === 10 ? "Pass" : "Fail");
console.log("Zero Multiplication Test 1:", multiply(7, 0) === 0 ? "Pass" : "Fail");
console.log("Zero Multiplication Test 2:", multiply(0, 7) === 0 ? "Pass" : "Fail");
console.log("Zero Division Test 1:", divide(12, 0) === "Error: Cannot be divided by zero" ? "Pass" : "Fail");
console.log("Zero Division Test 2:", divide(0, 12) === 0 ? "Pass" : "Fail");

//Negative Numbers
console.log("Neg Addition Test 1:", add(5, -3) === 2 ? "Pass" : "Fail");
console.log("Neg Addition Test 2:", add(-5, -3) === -8 ? "Pass" : "Fail");
console.log("Neg Addition Test 3:", add(-5, 3) === -2 ? "Pass" : "Fail");
console.log("Neg Subtraction Test 1:", subtract(10, -4) === 14 ? "Pass" : "Fail");
console.log("Neg Subtraction Test 2:", subtract(-10, -4) === -6 ? "Pass" : "Fail");
console.log("Neg Subtraction Test 3:", subtract(-10, 4) === -14 ? "Pass" : "Fail");
console.log("Neg Multiplication Test 1:", multiply(7, -6) === -42 ? "Pass" : "Fail");
console.log("Neg Multiplication Test 2:", multiply(-7, -6) === 42 ? "Pass" : "Fail");
console.log("Neg Multiplication Test 3:", multiply(-7, 6) === -42 ? "Pass" : "Fail");
console.log("Neg Division Test 1:", divide(-12, -6) === 2 ? "Pass" : "Fail");

//Float Numbers 
console.log("Float Addition Test 1:", add(1.4, 0.7).toFixed(1) === "2.1" ? "Pass" : "Fail");
console.log("Float Subtraction Test 1:", subtract(-1.4, 0.7).toFixed(1) === "-2.1" ? "Pass" : "Fail");
console.log("Float Multiplication Test 1:", multiply(1.4, 0.7).toFixed(2) === "0.98" ? "Pass" : "Fail");
console.log("Float Multiplication Test 2:", multiply(1.234, 5.678).toFixed(3) === "7.007" ? "Pass" : "Fail");

//Small Numbers
console.log("Small Numbers Addition Test:", add(1e-10, 1e-10) === 2e-10 ? "Pass" : "Fail");
console.log("Small Numbers Subtraction Test:", subtract(1e-10, 1e-10) === 0 ? "Pass" : "Fail");

//Large Numbers
console.log("Large Numbers Addition Test:", add(1e+308, 1e+308) === Infinity ? "Pass" : "Fail");
console.log("Large Numbers Subtraction Test:", subtract(1e+308, 1e+308) === 0 ? "Pass" : "Fail");
console.log("Large Numbers Multiplication Test 1:", multiply(1e+308, 1e+308) === 1e+616 ? "Pass" : "Fail");
console.log("Large Numbers Multiplication Test 2:", multiply(1000000, 1000000) === 1000000000000 ? "Pass" : "Fail");
