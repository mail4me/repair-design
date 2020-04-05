document.addEventListener("DOMContentLoaded", function(event) { 
   const modal = document.querySelector('.modal');
   const modalbtn = document.querySelectorAll('[data-toggle=modal]');
   const closeBtn = document.querySelector('.modal__close, .modal');
   const switchModal = () => {
     modal.classList.toggle('modal--visible');
    }
   modalbtn.forEach(element => {
     element.addEventListener('click', switchModal);
  }); 
   
   closeBtn.addEventListener('click', switchModal);
});