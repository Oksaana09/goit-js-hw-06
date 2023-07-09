const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemIngrediensList = document.querySelector('#ingredients');

const creatItemIngredientsList = items => {
  return items.map(item => {
    const itemIngrediens = document.createElement('li');
    itemIngrediens.textContent = item;
    itemIngrediens.classList.add('item');

    return itemIngrediens;
  });
};

const elements = creatItemIngredientsList(ingredients);
itemIngrediensList.append(...elements);