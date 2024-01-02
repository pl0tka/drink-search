import { hideLoading } from './toggleLoading.js';
import get from './getElement.js';

const displayDrink = (data) => {
  hideLoading();

  const drink = data.drinks[0];
  // destruction
  const {
    strDrinkThumb: image,
    strDrink: name,
    strInstructions: description,
  } = drink;
  const ingredientsList = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
    drink.strIngredient7,
    drink.strIngredient8,
    drink.strIngredient9,
  ];
  // selecting DOM elements
  const img = get('.drink-img');
  const drinkName = get('.drink-name');
  const drinkDescription = get('.drink-description');
  const ingredients = get('.drink-ingredients');
  // assigning data to DOM elements
  img.src = image;
  document.title = name;
  drinkName.textContent = name;
  drinkDescription.textContent = description;
  ingredients.innerHTML = ingredientsList.map((item) => {
    if (item) return `<li><i class="far fa-check-square"></i>${item}</li>`;
  }).join``;
  console.log(drink);
};

export default displayDrink;
