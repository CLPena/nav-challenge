var header = document.querySelector('header');
var buttons = document.querySelectorAll('.btn');
var allCoursesPage = document.querySelector('.all-courses');
var collectionsPage = document.querySelector('.collections');
var wishlistPage = document.querySelector('.wishlist');
var archivedPage = document.querySelector('.archived');
var pages = document.querySelectorAll('.page');

header.addEventListener('click', changeView);

function changeView(){
  addBorder();
  removeContent();
  addContent();
}

function addBorder(){
  if (event.target.classList.contains('btn')){
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('border');
    }
    event.target.classList.add('border');
  }
}

function removeContent(){
  if (event.target.classList.contains('btn')){
    for (var i = 0; i < pages.length; i++) {
      pages[i].classList.add('invisible');
    }
  }
}

function addContent(){
  if (event.target.classList.contains('all-courses-btn')){
    allCoursesPage.classList.remove('invisible');
  } else if (event.target.classList.contains('collections-btn')){
    collectionsPage.classList.remove('invisible');
  } else if (event.target.classList.contains('wishlist-btn')){
    wishlistPage.classList.remove('invisible');
  } else if (event.target.classList.contains('archived-btn')){
    archivedPage.classList.remove('invisible');
  }
}
