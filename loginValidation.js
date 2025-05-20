// Login Validation Function
function validateLogin(username, password) {
    if (!username || !password) {
        return false;                                            // Missing input check is correct
    }
    if (username === "admin" && password === "1234") {
        return true;                                            // Only valid login credentials are hardcoded
    }
    return false;
}

//Fixed Test Case
console.log("Login Test 1:", validateLogin("admin", "1234") === true ? "Pass" : "Fail");

//Edge Test Cases
console.log("Missing Username Login Test 2:", validateLogin("", "1234") === true ? "Pass" : "Fail");
console.log("Missing Password Login Test 3:", validateLogin("admin", "") === true ? "Pass" : "Fail");
console.log("Null Value Login Test 4:", validateLogin("null", "null") === true ? "Pass" : "Fail");
console.log("Empty Field Login Test 5:", validateLogin("", "") === true ? "Pass" : "Fail");
console.log("Extra Space Login Test 6:", validateLogin(" admin ", " 1234") === true ? "Pass" : "Fail");
console.log("Invalid Username Login Test 7:", validateLogin("Admin", "1234") === false ? "Pass" : "Fail");
console.log("Invalid Password Login Test 8:", validateLogin("admin", "abc1234") === true ? "Pass" : "Fail");
console.log("Same Username Login Test 9:", validateLogin("admin", "admin") === true ? "Pass" : "Fail");
console.log("Long String Login Test 11:", validateLogin("a".repeat(1000), "b".repeat(1000)) === false ? "Pass" : "Fail");
console.log("Special Characters Login Test 12:", validateLogin("a@b$c%d$f&", "1@2$3%4") === true ? "Pass" : "Fail");