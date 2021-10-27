let form = document.querySelector('.phrase');
let text = "'It's a nice' she said. 'What's wrong' he answer.";


const insertButton = document.querySelector('.btn1')
const changeButton = document.querySelector('.btn2')

insertButton.addEventListener('click', () => {
    form.textContent = text;
})
changeButton.addEventListener('click', () => {
    form.textContent = form.textContent.replace(/\B'|'\B/g, '"');
})