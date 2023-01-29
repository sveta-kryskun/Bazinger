"use strict"
const isMobile = {
    Android: function(){
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function(){
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function(){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function(){
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function(){
        return navigator.userAgent.match(/IEmobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};
if (isMobile.any()){
    document.body.classList.add('_touch');
} else{
    document.body.classList.add('pc');
}



const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLink = document.querySelector('.menu__sub-link');
const menuList = document.querySelector('.menu__list');
if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
if(menuList){
    menuList.addEventListener("click", function(e){
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
    });
}
//

// if(menuLink.classList.contains('_active')){
//     menuLink.addEventListener("click", function(e){
//         document.body.classList.toggle('_lock');
//         iconMenu.classList.toggle('_active');
//         menuBody.classList.toggle('_active');
//     });
// }



// function onMenuClick(e) {
//     if (iconMenu.classList.contains('_active')) {
//             document.body.classList.remove('_lock');
//             iconMenu.classList.remove('_active');
//             menuBody.classList.remove('_active');
//         };
// }
// function onMenuLinkClick(e) {
//     const menuLink = e.target;
    // if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
    //     const gotoBlock = document.querySelector(menuLink.dataset.goto);
    //     const gotoBlockValue = gotoBlock.getBoundingClientRect().top +pageYOffset - document.querySelector('header').offsetHeight;
        // if(iconMenu.classList.contains('_active')){
        //     document.body.classList.remove('_lock');
        //     iconMenu.classList.remove('_active');
        //     menuBody.classList.remove('_active');
        // }
        // if(iconMenu.classList.contains('_active')){
        //     // menuLink.addEventListener("click", function(e){
        //         document.body.classList.remove('_lock');
        //         iconMenu.classList.remove('_active');
        //         menuBody.classList.remove('_active');
        //     }
        // }
// }

