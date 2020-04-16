
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

   //Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },

      userPhone: { 
        required: true,
        minlength: 17
      },

        // compound rule
        // Правило объект
      userEmail: {
        required: true,
        email: true
      },

    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя короче двух букв",
        maxlength: "Имя слишком длинное"
      },

      userPhone: {
        required: "Телефон обязательно",
        minlength: "Введите номер полностью"
      },

      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      },
        // userCheck: "Поставьте галочку, если согласны"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(modal).serialize(),
        success: function (response) {
          alert('Форма отправлена, мы свяжемся с вами через 10 минут.');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    }
  });
  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
       // строчное правило
       // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },

      userPhone: { 
        required: true,
        minlength: 17
      },

       // compound rule
       // Правило объект
      userEmail: {
        required: true,
        email: true
      },
       //userCheck: {
       //required: true
       //}
     },// сообщения

    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя короче двух букв",
        maxlength: "Имя слишком длинное"
      },
      userPhone: {
        required: "Телефон обязательно",
        // minlength: "Телефон короче двух символов",
        minlength: "Введите номер полностью"
      },

      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      },
       // userCheck: "Поставьте галочку, если согласны"
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
       // строчное правило
       // simple rule, converted to {required:true}
      userName: {
        equired: true,
        minlength: 2,
        maxlength: 15
      },

      userPhone: { 
        required: true,
        minlength: 17
      },

       // compound rule
       // Правило объект
      userEmail: {
        required: true,
        email: true
      },
      userCheck: {
        required: true
      }
     },// сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя короче двух букв",
        maxlength: "Имя слишком длинное"
      },
      userPhone: {
        required: "Телефон обязательно",
        // minlength: "Телефон короче двух символов",
        minlength: "Введите номер полностью"
      },

      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      },
      userCheck: "Поставьте галочку, если согласны"
    },

  });
  $(".modal__form").validate({
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        dataType: "dataType",
        success: function (response) {
          console.log('Ajax сработал, ответ сервера:' +response );
        }
      });
    }
  });
   //Маска телефон

   $('[type=tel]').mask('+7 (000) 000 00 00', {placeholder: "Ваш номер телефона:"});

   //карта
   ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [47.208901, 39.631539],
              zoom: 17
          }, {
              searchControlProvider: 'yandex#search'
          }),
  
          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),
  
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Наш офис',
              balloonContent: 'Вход со двора'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/marker.svg',
              // Размеры метки.
              iconImageSize: [32, 32],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
          });
  
      
  
      myMap.geoObjects
          .add(myPlacemark)
          
  });
})