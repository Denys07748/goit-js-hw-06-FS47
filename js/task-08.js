const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);



function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    const isValidForm = [...formElements]
    .filter((el) => el.tagName === 'INPUT')
    .some(el => el.value === '');

    if(isValidForm) {
      alert('Будь ласка, заповніть всі поля;)');
    }

    const formData = {
        email,
        password,
    };


    console.log(formData);
    event.currentTarget.reset();
}

