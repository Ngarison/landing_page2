/* const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  
  }); */
  let i=0

const wrapperChildren = document.querySelector(".slide-wrapper");
console.log(wrapperChildren);

const tab = ['<div class="slide"><h1 class="slide-number">Passion</h1></div>'];

  function previous(){
    i--;
    wrapperChildren.replaceChild(tab[0], div)
  }

  function next(){
    i++;
    wrapperChildren[1].replaceChild=tab[i]

  }