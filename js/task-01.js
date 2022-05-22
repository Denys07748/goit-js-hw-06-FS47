 const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length);

// 1 спосіб

// const categoryTitleEl = document.querySelectorAll('h2');
// const listEl = document.querySelectorAll('.item ul');

// console.log('Category:', categoryTitleEl[0].textContent);
// const listItemFirstEl = listEl[0].children;
// console.log('Elements:', listItemFirstEl.length);


// console.log('Category:', categoryTitleEl[1].textContent);
// const listItemSecondEl = listEl[1].children;
// console.log('Elements:', listItemSecondEl.length);


// console.log('Category:', categoryTitleEl[2].textContent);
// const listItemLastEl = listEl[2].children;
// console.log('Elements:', listItemLastEl.length);


// 2 спосіб

for (const caregory of categoriesEl) {
    const categoryTitleEl = caregory.querySelector('h2');
    console.log('Category:', categoryTitleEl.textContent);
    const listItemEl = caregory.querySelectorAll('li');
    console.log('Elements:', listItemEl.length);
};