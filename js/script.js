'use strict'
//анимация бургера
let spoiler__content
document.querySelector('.head__burger').addEventListener('click',
   function () {
      document.querySelector('.head__burger span').classList.toggle('active');
      spoiler__content = document.getElementById('menu');
      slideToggle(spoiler__content);
   })
//анимация бургера

//функция анимации слайдера
function slideToggle(target, duration = 500) {
   if (window.getComputedStyle(target).display === 'none') {
      return slideDown(target, duration);
   } else {
      return slideUp(target, duration);
   }
}

function slideUp(target, duration = 500) {
   target.style.transitionProperty = 'height, margin, padding';
   target.style.transitionDuration = duration + 'ms';
   target.style.boxSizing = 'border-box';
   target.style.height = target.offsetHeight + 'px';
   target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   window.setTimeout(() => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      //alert("!");
   }, duration);
}

function slideDown(target, duration = 500) {
   target.style.removeProperty('display');
   let display = window.getComputedStyle(target).display;

   if (display === 'none')
      display = 'block';

   target.style.display = display;
   let height = target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   target.offsetHeight;
   target.style.boxSizing = 'border-box';
   target.style.transitionProperty = "height, margin, padding";
   target.style.transitionDuration = duration + 'ms';
   target.style.height = height + 'px';
   target.style.removeProperty('padding-top');
   target.style.removeProperty('padding-bottom');
   target.style.removeProperty('margin-top');
   target.style.removeProperty('margin-bottom');
   window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
   }, duration);
}
//функция анимации слайдера

//Плавный скролл
// const smoothLinks = document.querySelectorAll('a[href^="#"]');
// for (let smoothLink of smoothLinks) {
//    smoothLink.addEventListener('click', function (e) {
//       e.preventDefault();
//       const id = smoothLink.getAttribute('href');

//       document.querySelector(id).scrollIntoView({
//          behavior: 'smooth',
//          block: 'start'
//       });
//    });
// };
document.addEventListener('click', (e) => {
   if (e.target.tagName === 'A' && e.target.href) {
      e.stopPropagation();
      e.preventDefault();

      document.getElementById(e.target.getAttribute('href').replace('#', '')).scrollIntoView({
         behavior: 'smooth',
         block: 'start',
      });
   }
})
//Плавный скролл
function Username(Name, job) {
   this.Name = Name;
   this.job = job;
}

//Свайпер
const swiper = new Swiper('.swiper-container', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   grabCursor: true,
   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   effect: "cube",
   speed: 1000,
   cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
   },
});
//Свайпер
//Анимация элементов
const animItems = document.querySelectorAll('.anim-items');
if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll)
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;
         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }
         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('active');
         } else {
            animItem.classList.remove('active');
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrolltop;
      return { top: rect.top + scrollTop || 1, left: rect.left + scrollLeft }
   }
   setTimeout(() => {
      animOnScroll();
   }, 500);

}