// Concatenating strings and numbers + multiplying an input & printing results
const orderingPizza = function (foodQuantity = 1, foodType = "pizza" , time = "today") {
let orderQuantity = foodQuantity * 2;

console.log(`Hello, I would like to order ${orderQuantity} ${foodType}s ${time}`);
}

orderingPizza();