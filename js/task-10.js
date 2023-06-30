const inputEl = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const divByBoxes = document.querySelector('#boxes');

inputEl.addEventListener('keyup', createBoxes);
buttonCreate.addEventListener('click', createColection );
buttonDestroy.addEventListener('click', destroyColection );



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const arreyDyBox = [];
  for (let i = 0; i < amount; i++){
  const newDivEl = document.createElement('div')
  newDivEl.style.background = getRandomHexColor()
  newDivEl.style.width = `${30 + 10 * i}px`
  newDivEl.style.height = `${30 + 10 * i}px`
  arreyDyBox.push(newDivEl)
  }
  return arreyDyBox
  }

  function createColection() {
  let madeBoxes = createBoxes(inputEl.value);
  
  //console.log(madeBoxes);
  
  divByBoxes.append(...madeBoxes);
}
 

function destroyColection(){
  boxes.innerHTML = '';
}
