var prices = {
  MILK: 48.90,
  BREAD: 90.50,
  BUTTER: 130.12
};
var amounts = {
  MILK: 1,
  BREAD: 0.5,
  BUTTER: 0.2
}

console.log(typeof prices);
console.log(prices.BREAD);
console.log(amounts["MILK"]);

console.log(total(prices,amounts)); //debe imprimir 120.174

function total(prices, amounts){
    return Object.keys(prices).reduce((acc, cur) => acc + prices[cur]*amounts[cur], 0)
}