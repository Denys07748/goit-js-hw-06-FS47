let counterValueEl = document.querySelector('#value').textContent;
counterValueEl = 0;
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
console.log(decrementBtnEl);

const onDecremenBtnClick = () => {
   document.querySelector('#value').textContent = counterValueEl -= 1;
};

const onIncremenBtnClick = () => {
    document.querySelector('#value').textContent = counterValueEl += 1;
};


decrementBtnEl.addEventListener('click', onDecremenBtnClick);
incrementBtnEl.addEventListener('click', onIncremenBtnClick);