const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ulList = document.getElementById("ingredients");
const newLiArray = [];

const foodIngredients = ingredients.forEach(ingredient => {
  let items = document.createElement("li");
  items.innerHTML = ingredient;
  newArray.append(items);
});

ulList.append(...newLiArray)


