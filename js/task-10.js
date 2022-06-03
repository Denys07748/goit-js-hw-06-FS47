function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', onClickWrapper);
refs.destroyBtn.addEventListener('click', onDestroyBoxes);

function onClickWrapper(e) {
  onCreateBoxes(e, refs.input.value);
}

function onCreateBoxes(e, amount) {
  const boxesArray = [];
  let sizeDivEl = 20;

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
  
    sizeDivEl += 10;

    divEl.style.width = `${sizeDivEl}px`;
    divEl.style.height = `${sizeDivEl}px`;
    divEl.style.marginTop = '10px';
    divEl.style.backgroundColor = getRandomHexColor();

    boxesArray.push(divEl);
  }

  refs.boxes.append(...boxesArray);
}

function onDestroyBoxes() {
  refs.boxes.innerHTML = '';
}