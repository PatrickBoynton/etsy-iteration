// Question 1.
const prices = [];

// items.forEach((item) => {
//   prices.push(item.price);
// });

//
// const averagePrice = prices.reduce((a, b) => a + b) / items.length;
//
// console.log(`The average price is: $${averagePrice.toFixed(2)}`);


// Question 2.
const usd = items.filter(x => x.currency_code === "USD" && x.price > 14.00 && x.price < 18.00);

usd.forEach((item) => {
  prices.push(item.title)
});

console.log(prices);
