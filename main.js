// Question 1.
// const prices = [];

// items.forEach((item) => {
//   prices.push(item.price);
// });

//
// const averagePrice = prices.reduce((a, b) => a + b) / items.length;
//
// console.log(`The average price is: $${averagePrice.toFixed(2)}`);


// Question 2.
// const usd = items.filter(x => x.currency_code === "USD" && x.price > 14.00 && x.price < 18.00);
//
// usd.forEach((item) => {
//   prices.push(item.title)
// });
//
// console.log(prices);

// Quesetion 3.
// const gbp = items.filter(x => x.currency_code === "GBP");
//
// console.log(`${gbp[0].title} costs £${gbp[0].price}`);

// Question 4.
// const wood = items.filter(x => x.materials.includes("wood"));
//
// wood.forEach((item) => {
//     console.log(`${item.title} is made of wood.`);
// });

//  Quesetion.
const greaterThanEight = items.filter(x => x.materials.length > 7);

greaterThanEight.forEach((item) => {
    console.log(`${item.title}\n\n`);
    console.log(`${item.materials}` + "\n");
});
