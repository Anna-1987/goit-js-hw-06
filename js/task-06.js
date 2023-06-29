const inputElVal = document.querySelector('#validation-input');
const totalLenght = inputElVal.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght, 10);

inputElVal.addEventListener('focus', onInput );
inputElVal.addEventListener('blure', onInput );


 function onInput() {
  if (inputElVal.value.length === intTotallenght) {
    inputElVal.classList.remove("invalid");
    inputElVal.classList.add("valid");
  }
  if (inputElVal.value.length === 0) {
    inputElVal.classList.remove("valid");
    inputElVal.classList.remove("invalid");
  }
  if (inputElVal.value.length !== intTotallenght && inputElVal.value.length !== 0) {
    inputElVal.classList.add("invalid");
  }
};