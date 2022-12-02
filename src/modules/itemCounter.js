const counter = () => {
  const movies = document.querySelectorAll('.main-container');
  const counterPlaceholder = document.querySelector('.counter');
  counterPlaceholder.innerHTML = movies.length;
};

exports.counter = counter;