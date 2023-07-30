const list = document.querySelectorAll('.item');
console.log('Number of categories:', list.length);
list.forEach(function (el) {
    const title = el.querySelector('h2');
    const li = el.querySelectorAll('li');
    console.log('Category:', title.textContent);
    console.log('Elements:', li.length);
})