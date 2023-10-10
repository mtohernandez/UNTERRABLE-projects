'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefult();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(button => {
  button.addEventListener('click', openModal);
});

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();

  console.log(s1coords);

  e.target.getBoundingClientRect(); // Coords of the button
  console.log(scrollX, scrollY);

  section1.scrollIntoView({ behavior: 'smooth' }); // Modern way of scrolling to section
});

// document.querySelectorAll('.nav__link').forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////////////////////////////////////////////////////////
//? Selecting, Creating and Deleting elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allSections = document.querySelectorAll('.section');
console.log(allSections); // Select all the sections

document.getElementById('section--1');
const buttons = document.getElementsByTagName('button'); // Select all buttons and returns an HTML collection (and if the dom changes this collection changes dynamically)

console.log(document.getElementsByClassName('btn')); // Again HTML collection updated with the dom

const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML =
  'We use cookies for a better experience and personalized analytics. <button class="btn btn--close-cookie">Got it!</button>';

// To keep in mind: message is like a person (node to be exact) that can't be cloned unless you specify it.
// header.append(message.cloneNode(true)); //* Like this

header.before(message);
// header.after(message);

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.parentElement.removeChild(message);
});

message.style.backgroundColor = '#37383d';
// message.style.paddingTop = '10px'; // I find this a better way of doing it
// message.style.paddingBottom = '10px';

// Get access to the styles of the class
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; // Increases the height by 30 px

// Change the root style elements
// document.documentElement.style.setProperty('--color-primary', 'green');

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Both ways give the same result one is undefined and the other returns null
// Also the first way give directly the address and the other just the attribute
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

//? Types of events
// These are just the types 'mouseenter' 'click' and literally all of them

//? Event propagation
// How events with the current target and the target pass functionalites from the child to the parent, meaning from bottom to top.

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = 'rgb(0,145,255)';
  console.log(e.target);
  console.log(e.currentTarget);
});

//? DOM transversing 

const h1 = document.querySelector('h1');

// Going downwards: child 
console.log(h1.querySelectorAll('.highlight')); // Selects all the spans
console.log(h1.textContent);
console.log(h1.children); // HTML elements
console.log(h1.closest('.header')); // Query selector for parent elements

//? Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');

  if(!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active')); // Remove on all tabs
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  
  clicked.classList.add('operations__tab--active');
  
  // Content to display
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

});