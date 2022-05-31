const fontSizeInputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeInputEl.addEventListener('input', onChangeTextFontSize);

function onChangeTextFontSize () {
   textEl.style.fontSize = `${fontSizeInputEl.value}px`;
}