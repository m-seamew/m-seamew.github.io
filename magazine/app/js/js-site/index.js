
function playYoutube() {

  document.querySelector('.video__youtube').src = "https://www.youtube.com/embed/c8uAnqwWERM?rel=0&showinfo=0&autoplay=1&loop=1";
  document.querySelector('.video__button').style.opacity = "0";
  document.querySelector('.video__button').style.pointerEvents = "none";

}




function fixedMenu() {

  let scroll = pageYOffset;
  const menu = document.querySelector('.container--full-screen-menu');
  if (window.matchMedia("(min-width: 1024px)").matches == true) {
    if (scroll > 700) {
      menu.classList.add('container--full-screen-menu-fixed')
      menu.classList.remove('container--full-screen-menu-fixedet')
      menu.style.top = `${-menu.clientHeight - 2}px`;
    }

    scroll < 300 ? menu.classList.remove('container--full-screen-menu-fixed') : null;
    scroll < 700 ? menu.classList.add('container--full-screen-menu-fixedet') : null;
  }
}

window.addEventListener('scroll', fixedMenu)


let cartItem = [
  {
    id: 0,
    name,
    price: 0,
    size: '',
  }
];

function cart(e) {


  const btn = [...document.querySelectorAll('.icon__item--cart')];


  btn.forEach(element => {
    if (e.target == element) {
      const el = +e.target.dataset.id; 

        let tempCard = document.querySelector(`.card >*>*>*>.icon__item--cart[data-id = "${element.dataset.id}"]`);

        tempCard != null ? tempCard.parentElement.parentElement.parentElement.parentElement.setAttribute('data-id',  `${element.dataset.id}`) : null;

        let popup = document.createElement('div');
        popup.innerHTML = `<div class="popup" data-id="${element.dataset.id}">  <div class="popup__main">
        <div class="popup__main-container">
          <h3 class="popup__header">Добавить в корзину</h3>
          <p class="popup__subheader">Выберите размер:</p>
          <div class="popup__sizes">
            <input type="radio" name="popup" id="pop1" class="popup__input" checked>
            <label for="pop1" class="btn btn--size  popup__size-btn">
              <a class="btn__link">
                <div class="btn__text btn__text--size popup__text">S</div>
              </a>
            </label>
    
            <input type="radio" name="popup" id="pop2" class="popup__input">
            <label for="pop2" class="btn btn--size  popup__size-btn">
              <a class="btn__link">
                <div class="btn__text btn__text--size popup__text">M</div>
              </a>
            </label>
    
            <input type="radio" name="popup" id="pop3" class="popup__input">
            <label for="pop3" class="btn btn--size  popup__size-btn">
              <a class="btn__link">
                <div class="btn__text btn__text--size popup__text">L</div>
              </a>
            </label>
         
        </div>
        <div class="btn popup__btn-body">
          <a class="btn__link">
            <div class="popup__btn">Заказать</div>
          </a>
        </div>
      </div>
      </div>`;
        document.querySelector('body').append(popup);
      }
      document.querySelector('body').classList.add("popup__fixed");
     // document.querySelector('.popup__btn').addEventListener('click', addToCart);
  });
  document.querySelector('.popup__btn').addEventListener('click', removed);
}


const btn = [...document.querySelectorAll('.card')];
btn.forEach(element => {
  element.addEventListener('click', cart);
});


function removed() {
  document.querySelector('.popup').parentElement.remove();
  document.querySelector('body').classList.remove("popup__fixed");
}



function addToCart(e) {
  e = +e.target.dataset.id;

  const btn = [...document.querySelectorAll('.icon__item--cart')];

  btn.forEach(element => {

    if (element.dataset.id == e) {
      let tempSize = '';
      let tempId = e;
      let tempName =

        cartItem.push({ id: tempId, name: tempName, price: tempPrice, size: tempSize })
    }
    // cartItem.push();
  })
}



//Mapbox
//document.querySelector('.video__button-img').addEventListener('click', playYoutube);


