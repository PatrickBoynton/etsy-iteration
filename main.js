// Question 1.
// In class refactor.
const prices = items.map(item => item.price);


const averagePrice = prices.reduce((a, b) => a + b) / items.length;

console.log(`The average price is: $${averagePrice.toFixed(2)}`);


// Question 2.
// const usd = items.filter(x => x.currency_code === "USD" && x.price > 14.00 && x.price < 18.00);
// console.log("tems that cost between $14.00 USD and $18.00 USD: \n");
// usd.forEach((item) => {
//   prices.push(item.title);
// });
// prices.forEach((item) => {
//   console.log(item);
// });

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

//  Quesetion 5.
// const greaterThanEight = items.filter(x => x.materials.length > 7);
//
// greaterThanEight.forEach((item) => {
//     console.log(`${item.title}\n\n`);
//     console.log(`${item.materials}` + "\n");
// });

// Question 6.
// const whoMade = items.filter(x => x.who_made === "i_did");
//
// console.log(`${whoMade.length} were made by their sellers.`);
