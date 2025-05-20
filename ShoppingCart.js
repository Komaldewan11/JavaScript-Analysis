// Shopping Cart Functions
let cart = [];

function addItem(item, quantity) {
    if (quantity < 1 || !Number.isInteger(quantity)) {
        console.log("Error: Quantity must be at least 1");
        return false;
    }

    const lowerCaseItem = item.trim().toLowerCase();            //this will hande case sensitive and also trim whitespaces
    const existingItem = cart.find(cartItem => cartItem.item.trim().toLowerCase() === lowerCaseItem);    

    if (existingItem) {                                          //Merge quantity if item already exists
        existingItem.quantity += quantity;
    } else {
        cart.push({ item, quantity });
    }
    return true;
}

function removeItem(item) {
    const lowerCaseItem = item.trim().toLowerCase();            //this will hande case sensitive and also trim whitespace
    const initialLength = cart.length;

    cart = cart.filter(cartItem => cartItem.item.trim().toLowerCase() !== lowerCaseItem);

    if (cart.length === initialLength) {
        console.log(`Item "${item}" not found in cart.`);
        return false;                                           //nothing's removed
    }
    return true;                                                //Item is removed
}
function getCartTotal() {
    return cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
}

//Fixed Test Cases (add Item)
console.log("Test: 1", addItem("Apple", 3), cart);
console.log("Test: 2",addItem("Banana", 2), cart);
console.log("Test: 1", addItem("Grapes", 3), cart);
console.log("Test: 3", addItem("apple", 2), cart);
//Edge Test Cases (add Item)
console.log("String Quantity Test: 4", addItem("Banana", "h"), cart);
console.log("Zero Quantity Test: 5", addItem("Banana", 0), cart);
console.log("white Space Test: 6", addItem(" banana ", 2), cart);
console.log("Special Char Test: 7", addItem("b234&&_anana ", 6), cart);
console.log("Empty String Test: 8", addItem("", 5), cart);
console.log("Negative Number Test: 9", addItem("Grapes", -1), cart);
console.log("Floating Number Test: 10", addItem("Orange", 4.5), cart);
console.log("Item Number-Named Test: 11", addItem("5678", 4), cart);

//Fixed Test Case (remove Item)
console.log("Remove Test: 1", removeItem("Apple"), cart);
console.log("Remove Test: 2", removeItem("Banana"), cart);
//Edge Test Cases (remove Item)
console.log("Case Sensitive Test: 3", removeItem("GRAPES"), cart);
console.log("Not in Cart Item Test: 4", removeItem("Blueberries"), cart);
console.log("Empty String Test: 5", removeItem(""), cart);
console.log("Special Char Test: 6", removeItem("b234&&_ana "), cart);
console.log("white Space Test: 7", removeItem(" b234&&_anana "), cart);
console.log("Item Number-Named Test: 8", removeItem("5678"), cart);
console.log("Empty Cart Test: 9", removeItem("b234&&_anana"), cart);

//Get Cart Total Test
console.log("Cart Total Test 1:", getCartTotal() === 0 ? "Pass" : "Fail");