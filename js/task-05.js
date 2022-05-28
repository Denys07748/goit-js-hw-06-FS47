const inputEl = document.querySelector('#name-input');
const nameLabelEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChenge);

function onInputChenge () {
    console.log(event.currentTarget.value);
    event.currentTarget.value === ''
    ? nameLabelEl.textContent = 'Anonymous'
    : nameLabelEl.textContent = event.currentTarget.value;
}
