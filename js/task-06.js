const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);
inputEl.addEventListener('input', onInputChenge);

function onInputBlur () {
    if(inputEl.value.length === Number(inputEl.dataset.length)) {
     inputEl.classList.remove('invalid')
    inputEl.classList.add('valid')
    } else {
     inputEl.classList.remove('valid') 
    inputEl.classList.add('invalid')
    }
}

function onInputChenge (event) {
    console.log(event.currentTarget.value);
}