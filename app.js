const screen = document.getElementById('display');
const buttons = [...document.getElementsByClassName('button')];

//clear screen
function clear() {
  screen.value = '';
}

function displayResult() {
  const result = eval(screen.value);
  screen.value = result;
}

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    switch (e.target.textContent) {
      case 'C':
        clear();
        break;
      case '=':
        displayResult();
        break;
      default:
        screen.value += e.target.textContent;
    }
  });
});
