function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColorEl = document.querySelector('body');
const spanColorEl = document.querySelector('.color');
const buttonColorEl = document.querySelector('.change-color');

buttonColorEl.addEventListener('click', changeColorBody);

function changeColorBody(){
 const colorBody = getRandomHexColor();
 bodyColorEl.style.backgroundColor = colorBody;
 spanColorEl.textContent = colorBody;
}
