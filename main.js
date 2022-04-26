'use strict';

const menu = document.querySelector('#btn-menu');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('#header');
const navbarList = document.querySelector('#navbar-list');
const navbarLogin = document.querySelector('.navbar-login');
const subContainer = document.querySelector('#subcontainer');


menu.addEventListener("click", () => {
   subContainer.classList.toggle("active");
   header.classList.toggle("active");
   navbar.classList.toggle("active");
   navbarList.classList.toggle("active");
   navbarLogin.classList.toggle("active");
})
