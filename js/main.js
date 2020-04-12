
$(document).ready(function(){
   const modal = $('.modal'),
     modalBtn = $('[data-toggle=modal]'),
     closeBtn = $('.modal__close');
   modalBtn.on('click',function(){
     modal.toggleClass('modal--visible') 
   });
   closeBtn.on('click', function(){
      modal.toggleClass('modal--visible')
   })

   var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      }
   })

   var next = $('.swiper-button-next');
   var prev = $('.swiper-button-prev');
   var bullets = $('.swiper-pagination');

   next.css('left', prev.width() +30 +bullets.width() +30 )
   bullets.css('left', prev.width()+30 )
   
   new WOW().init();
})