var header = document.querySelector('header');
var buttons = document.querySelectorAll('.btn');

header.addEventListener('click', addBorder);

function addBorder(){
  if (event.target.classList.contains('btn')){
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('border');
    }
    event.target.classList.add('border');
  }
}
