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

