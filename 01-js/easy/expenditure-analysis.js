/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = new Map();

  // Iterate through each transaction
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    // Check if the category already exists in the map
    if (categoryMap.has(category)) {
      // If the category exists, update the total spent
      const totalSpent = categoryMap.get(category) + price;
      categoryMap.set(category, totalSpent);
    } else {
      // If the category doesn't exist, add it to the map
      categoryMap.set(category, price);
    }
  });

  // Convert map to array of objects
  const result = [];
  categoryMap.forEach((totalSpent, category) => {
    result.push({ category, totalSpent });
  });

  return result;
}

module.exports = calculateTotalSpentByCategory;
