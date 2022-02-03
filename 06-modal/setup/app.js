"use strict"

const toggleModal = () => {
   const modalOverlay = document.querySelector('.modal-overlay');
   modalOverlay.classList.toggle('open-modal');
}

document.querySelector('.modal-btn').addEventListener('click', toggleModal);
document.querySelector('.close-btn').addEventListener('click', toggleModal);




