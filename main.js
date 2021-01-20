// Question 1.
const prices = [];

items.forEach((item) => {
  prices.push(item.price);
});


const averagePrice = prices.reduce((a, b) => a + b) / items.length;

console.log(`The average price is: $${averagePrice.toFixed(2)}`);
