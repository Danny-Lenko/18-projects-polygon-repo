"use strict"


const toggleSideBar = () => {
   const sideBar = document.querySelector('.sidebar');
   sideBar.classList.toggle('show-sidebar');
}

document.querySelector('.sidebar-toggle').addEventListener('click', toggleSideBar);
document.querySelector('.close-btn').addEventListener('click', toggleSideBar);
