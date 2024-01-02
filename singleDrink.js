import fetchDrinks from './src/fetchDrinks.js';
import displayDrink from './src/displaySingleDrink.js';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const presentDrink = async () => {
  const id = localStorage.getItem('drink');
  // this is needed if for some reason user's local storage is empty (so ID is null) -> they will be redirected to index.html
  if (!id) {
    window.location.replace('./index.html');
  } else {
    const drink = await fetchDrinks(`${url}${id}`);
    displayDrink(drink);
  }
};

window.addEventListener('DOMContentLoaded', presentDrink);
