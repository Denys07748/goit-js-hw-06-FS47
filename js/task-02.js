const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('ul');

// 1 спосіб

// const elements = ingredients.map(ingredient => {
//   const ingredientEl = document.createElement('li');
//   ingredientEl.textContent = ingredient;
//   ingredientEl.classList.add('item');

//   return ingredientEl;
// });

// console.log(elements);

// ingredientsEl.append(...elements);

// 2 спосіб

const makeIngredients = constituents => {
  return constituents.map(constituent => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = constituent;
  ingredientEl.classList.add('item');

  return ingredientEl;
});
}

const elements = makeIngredients(ingredients);
console.log(elements);

ingredientsEl.append(...elements);