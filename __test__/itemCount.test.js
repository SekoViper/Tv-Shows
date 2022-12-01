/**
 * @jest-environment jsdom
 */
const { counter } = require('../src/modules/itemCounter.js');

// Testing for a number of movies
test('Count the number of items', () => {
  document.body.innerHTML = `
    <div class="main-container"></div>
    <div class="main-container"></div>
    <div class="main-container"></div>
    <ul>
      <li><span class="counter"></span> </li>
    </ul>
  `;
  const counterEl = document.querySelector('.counter');
  counter();
  expect(counterEl.innerHTML).toBe('3');
});

// Testing if there are no Movies
test('Count the number of items', () => {
  document.body.innerHTML = `
    <ul>
      <li><span class="counter"></span> </li>
    </ul>
  `;
  const counterEl = document.querySelector('.counter');
  counter();
  expect(counterEl.innerHTML).toBe('0');
});