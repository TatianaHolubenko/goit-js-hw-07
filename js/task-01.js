// Задача 1

const category = document.querySelector('#categories');
console.log(`Number of categories: ${category.children.length}`);

const item = category.querySelectorAll('.item');

item.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
