// Завдання 6

const input = document.querySelector('input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyBoxes();

  const newAmount = Number(input.value);
  if (newAmount >= 1 && newAmount <= 100) {
    let size = 30;
    const moreOn = 10;
    const array = [];

    for (let i = 0; i < amount; i++) {
      const newDiv = document.createElement('div');
      newDiv.style.backgroundColor = getRandomHexColor();
      newDiv.style.width = `${size}px`;
      newDiv.style.height = `${size}px`;

      array.push(newDiv);
      size += moreOn;
    }

    boxes.append(...array);
    input.value = '';
    console.log(`Create, ${amount}`);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
  console.log('Destroy');
}

buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);
