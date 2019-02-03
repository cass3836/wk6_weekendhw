document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const formSubmit = document.querySelector('#tea-rating-form');
  formSubmit.addEventListener('submit', handleFormSubmit);

  const formDelete = document.querySelector('#delete-items');
  formDelete.addEventListener('click', handleFormDelete);
});

const handleFormSubmit = function(event){
  event.preventDefault();

  const newRating = document.createElement('li')
  newRating.textContent = `
  Brand: ${event.target.brand.value}
  Type: ${event.target.type.value}
  Rating: ${event.target.rating.value}
  `
  const ratingsList = document.querySelector('#ratings-list')
  ratingsList.appendChild(newRating)

  const formSubmit = document.querySelector('#tea-rating-form');
  formSubmit.reset();
  console.dir(ratingsList);
};

const handleFormDelete = function(){
  const allItems = document.querySelector('#ratings-list');
  allItems.innerHTML='';
  // console.dir(handleFormDelete);
};
