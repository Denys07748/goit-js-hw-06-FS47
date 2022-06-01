function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bgColorEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');
const bodyEl = document.body;

buttonEl.addEventListener('click', onChengeBgColor);
bodyEl.addEventListener('change', onChengeBgColor);

function onChengeBgColor() {
    document.body.style.backgroundColor = getRandomHexColor();

    bgColorEl.textContent = bodyEl.style.backgroundColor;
}