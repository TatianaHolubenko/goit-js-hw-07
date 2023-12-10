// Завдання 4

const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formEmail = event.target.elements.email.value;
  const formPassword = event.target.elements.password.value;

  if (!formEmail || !formPassword) {
    alert('All form fields must be filled in');
  } else {
    const obj = {
      email: formEmail,
      password: formPassword,
    };
    console.log(obj);
  }
  form.reset();
});
