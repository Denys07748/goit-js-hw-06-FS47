function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create'),
  destroyBtn: document.querySelector('button[data-destoy'),
  boxes: document.querySelector('#boxes'),
}
const amount = refs.input.value;
// refs.input.addEventListener('input', );

refs.createBtn.addEventListener('click', onClickWrapper);
refs.destroyBtn.addEventListener('click', onDestroyBoxes);

function onClickWrapper(e) {
  onCreateBoxes(e, amount);
}

function onCreateBoxes(e, amount) {
  
 const divEl = document.createElement('div');
  const widthDiv = divEl.width;
  const heightDiv = divEl.height;

  widthDiv

}

function onDestroyBoxes() {

}