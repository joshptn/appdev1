const favFoods = ["Adobo", "Fried Chicken", "Spaghetti"];

favFoods.push("Chopsuey");
favFoods.shift();

for (let food of favFoods) {
  console.log(food);
}

const iLikeFoods = favFoods.map(food => "I like " + food);
console.log(iLikeFoods);