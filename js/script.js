//modal_header

const btns = document.querySelectorAll('.header__btn');
const btnClose = document.querySelectorAll('.modal__header__close');
const modalOverlay = document.querySelector('.modal__overlay',);

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modalOverlay.classList.add('modal__overlay--visible');
    document.querySelector(`[data-target="${path}"]`).classList.add('modal__header--visible');
  });
});

btnClose.forEach((el) => {
  el.addEventListener('click', (_e) => {
    modalOverlay.classList.remove('modal__overlay--visible');
  });
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal__overlay--visible');
  }
});



//popup
const btnPopup = document.querySelectorAll('.header__loupe')
const popup = document.querySelector('.popup',);



btnPopup.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    popup.classList.add('popup--visible');

  });
});

window.addEventListener('click', e => { // при клике в любом месте окна браузера
  const target = e.target // находим элемент, на котором был клик
  if (!target.closest('.popup') && !target.closest('.header__loupe')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
    popup.classList.remove('popup--visible') // то закрываем окно навигации, удаляя активный класс
  }
})



//burger
let burger = document.querySelector('.header__menu-burger');
let menu = document.querySelector('.header__top__list');
let menulinks = menu.querySelectorAll('.header__top__item');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menulinks.forEach(function (el) {
  el.addEventListener('click', function () {

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')

  })
})

let menuBottom = document.querySelector('.header__bottom__list');
let menulinksBottom = menu.querySelectorAll('.header__bottom__item');
burger.addEventListener('click',

  function () {

    menuBottom.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menulinksBottom.forEach(function (el) {
  el.addEventListener('click', function () {

    menu.classListBottom.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')

  })
})

let burgerPlay = document.querySelector('.header__menu-play');
let menuPlay = document.querySelector('.header__block__play');
let menulinksPlay = menu.querySelectorAll('.header__bottom__box');

burgerPlay.addEventListener('click',

  function () {

    burgerPlay.classList.toggle('burger--active');

    menuPlay.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menulinksPlay.forEach(function (el) {
  el.addEventListener('click', function () {

    burgerPlay.classList.remove('burger--active');

    menuPlay.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')

  })
})

//swiper

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 30,
  breakpointsBase: 'container',
  centerInsufficientSlides: 'true',
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});




//dropdown


//Полифилл для forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}


document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {

  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');



  dropDownBtn.addEventListener('click', function () {
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.add('.dropdown__button--active');
  });


  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownInput.value = this.dataset.value;

    })
  });

  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });


  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });
});

const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click',

  function () {

    dropdown.classList.toggle('dropdown-active');

    if (dropdown !== dropDownWrapper.querySelector('.dropdown__button')) {
      dropdown.classList.remove('dropdown-active')
    }

  });




//accordeon


var firstSectionBodyHeight = document.querySelector('.accordeon-section .accordeon-body > *').clientHeight


document.querySelector('.accordeon-section .accordeon-body').style.maxHeight = firstSectionBodyHeight + '1px'


document.querySelector('.accordeon-section .guests__link__svg').style.transform = 'rotate(' + 0 + 'deg)';


var accordeonHeaderClickHandler = function (e) {
  document.querySelectorAll('.accordeon-section').forEach(function (section) {
    section.querySelector('.accordeon-body').style.maxHeight = '0px'

    section.querySelector('.guests__link__svg').style.transform = 'rotate(' + 180 + 'deg)';

  })

  var accordeonSection = e.target.closest('.accordeon-section')

  var insideElHeight = accordeonSection.querySelector('.accordeon-body > *').clientHeight



  accordeonSection.querySelector('.accordeon-body').style.maxHeight = insideElHeight + 'px'

  accordeonSection.querySelector('.guests__link__svg').style.transform = 'rotate(' + 0 + 'deg)';

}

document.querySelectorAll('.accordeon-section').forEach(function (section) {
  section.addEventListener('click', accordeonHeaderClickHandler)

})


//tabs

const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');


tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('tabs__active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('tabs__active');

      });

      tabsItems.forEach(function (item) {
        item.classList.remove('tabs__active');
      });

      currentBtn.classList.add('tabs__active');
      currentTab.classList.add('tabs__active');

    }

  });
}


//broadcast
const myElement = document.getElementById('broadcast__list');
const parentElement = document.getElementById('broadcast__nav');
const parentElementContainer = document.getElementById('broadcast__container');


function myFunction(x) {
  if (x.matches) { // Если медиа запрос совпадает
    parentElement.append(myElement);
  }
  else {
    parentElementContainer.append(myElement);
  }
}

var x = window.matchMedia("(max-width: 960px)")
myFunction(x) // Вызов функции прослушивателя во время выполнения
x.addListener(myFunction); // Присоединить функцию прослушивателя при изменении состояния


//swiper-disable

function myFunctions(y) {
  if (y.matches) {
    swiper.disable();
  }
  else {
    swiper.enable();
  }
}

var y = window.matchMedia("(max-width: 576px)")
myFunctions(y)
y.addListener(myFunctions);
