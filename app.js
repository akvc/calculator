const screen = document.getElementById('display');
const buttons = [...document.getElementsByClassName('button')];

//clear screen
function clear() {
  screen.value = '';
}

function displayResult() {
  if (screen.value === '') console.log('error');
  else {
    const result = Function('return ' + screen.value)();
    screen.value = result;
  }
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
      case '<':
        screen.value = screen.value.slice(0, -1);
        break;
      case '+/-':
        if (screen.value.charAt(0) === '-') {
          console.log(screen.value);
          screen.value = screen.value.slice(1);
        } else screen.value = '-' + screen.value;
        break;
      default:
        screen.value += e.target.textContent;
    }
  });
});
