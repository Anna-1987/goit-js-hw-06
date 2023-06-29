const inputEl = document.querySelector('#name-input');
//console.log(inputEl);
const inputNameEl = document.querySelector('#name-output');
//console.log(inputNameEl);

inputEl.addEventListener('input', onInputChange );

function onInputChange(){
if (inputEl.value === ''){
   inputNameEl.textContent = 'Anonymous' ;
} else {
   inputNameEl.textContent = inputEl.value;
}
}
