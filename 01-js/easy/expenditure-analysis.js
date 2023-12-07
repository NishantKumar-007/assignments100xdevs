/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const ans = {};
  for (let obj of transactions) {
    const { category, price } = obj;
    if (!ans[category]) {
      ans[category] = price;
    } else {
      ans[category] += price;
    }
  }
  const result = Object.keys(ans).map((key) => {
    return { category: key, totalSpent: ans[key] };
  });
  return result;
}

module.exports = calculateTotalSpentByCategory;
