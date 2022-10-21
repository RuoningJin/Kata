const calculateChange = function(total, cash) {
  let change = cash - total;
  let bills = [
    {value: 2000, amount: 'twentyDollar'},
    {value: 1000, amount: 'tenDollar'},
    {value: 500, amount: 'fiveDollar'},
    {value: 200, amount: 'twoDollar'},
    {value: 100, amount: 'oneDollar'},
    {value: 25, amount: 'quarter'},
    {value: 10, amount: 'dime'},
    {value: 5, amount: 'nickel'},
    {value: 1, amount: 'penny'},];
  let output = {};
    for (let bill of bills) {
      if (change / bill.value >= 1) {
        let v = Math.floor(change / bill.value);
        output[bill.amount] = v;
        change = change - v * bill.value;
        if (change % bill.value === 0) {
          return output;
        }
      }
    }
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));