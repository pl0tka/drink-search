const setDrink = (section) => {
  section.addEventListener('click', function (e) {
    // e.preventDefault(); - preventing the default behaviour to check an ID (in console) because otherwise it's redirecting to another page right away
    const id = e.target.parentElement.dataset.id; // looking for a parent element (article) which contains an id
    localStorage.setItem('drink', id); // adding ID to the local storage
  });
};

export default setDrink;
