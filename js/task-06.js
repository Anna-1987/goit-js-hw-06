 const inputTextEl = document.querySelector('#validation-input');
// console.log(inputElVal.value.length);
const totalLenght = inputTextEl.getAttribute("data-length");

 inputTextEl.addEventListener('blur', outInput );


 function outInput(event) {
    if (event.target.value.length == totalLenght) {
		inputTextEl.classList.add('valid')
		if (inputTextEl.classList.contains('invalid')) {
			inputTextEl.classList.remove('invalid')
		}
	} else {
		if (inputTextEl.classList.contains('valid')) {
			inputTextEl.classList.remove('valid')
		}
		inputTextEl.classList.add('invalid')
	}
}
//   if (event.target.value.length === totalLenght) {
//     inputElVal.classList.remove("invalid");
//     inputElVal.classList.add("valid");
//   }
//   if (event.target.value.length === 0) {
//     inputElVal.classList.remove("valid");
//     inputElVal.classList.add("invalid");
//   }
//   if (event.target.value.length !== totalLenght && event.target.value.length !== 0) {
//     inputElVal.classList.add("invalid");
//   }
// };
