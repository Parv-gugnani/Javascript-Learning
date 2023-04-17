'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

//opening function
const OpenModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//closing function
const CloseModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  overlay.classList.add('hidden');
};

//opening by tapping on button
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', OpenModal);

/*
    function () {
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    >--[dont add it as '.hidden'//we are managing 
      the hidden class by doing some changes via 
      javascript and this is acutually Dom and even and manuplating is!]--<*/

//using functions
//closing by x
btnCloseModal.addEventListener('click', CloseModal);
//closing by clicking out of the box
overlay.addEventListener('click', CloseModal);

//closing by esc button like we do in game or any website
document.addEventListener('keydown', function (e) {
  //   console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //checking wether it is hidden or not
    CloseModal();
  }
});

//end-14april
