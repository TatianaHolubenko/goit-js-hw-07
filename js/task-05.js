// Завдання 5

const body = document.querySelector('body');
const span = document.querySelector('.color');
const button = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
button.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  span.textContent = newColor;
});
