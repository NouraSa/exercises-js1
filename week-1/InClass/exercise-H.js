// Concatenating strings and numbers + multiplying an input & printing results
const orderingPizza = function (foodQuantity = 1, foodType = "pizza" , time = "today") {
let orderQuantity = foodQuantity * 2;

return `Hello, I would like to order ${orderQuantity} ${foodType}s ${time}`;
}

orderingPizza();
console.log(orderingPizza());