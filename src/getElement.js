const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`"${selection}" selector does not exist`);
};

export default getElement;
