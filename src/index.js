const buttons = document.querySelectorAll('.buttons button');
const submit =document.querySelector('.submit');
const rating = document.querySelector('.span-text');
const card = document.querySelector('.box-1');
const success = document.querySelector('.box-2');
let value;

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        removeSelectedClasses()
        e.target.classList.add('selected')
        value = e.target.textContent;
    })
})

function removeSelectedClasses(){
    buttons.forEach(btn => {
        btn.classList.remove('selected')
    })
}

submit.addEventListener('click', () =>{
    rating.textContent = value;
    card.style.display = 'none';
    success.style.display = 'block';
})