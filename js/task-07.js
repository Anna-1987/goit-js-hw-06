const controlFontEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

controlFontEl.addEventListener('input', onInput);

function onInput() {
  textEl.style.fontSize = controlFontEl.value + "px";
};