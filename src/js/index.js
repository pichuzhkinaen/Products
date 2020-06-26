window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let menuItem = document.querySelectorAll('.menu_item'),
        catalog = document.querySelectorAll('.cards');

    changeVisibilityCatalogPizza();

    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener('click', addActiveClassMenu);
    }

    function addActiveClassMenu(event) {
        // console.log(event);

        //преобразование Node List в массив
        let menuItemArr = Array.from(menuItem);
        // console.log(menuItemArr);

        let indexMenuItem = menuItemArr.indexOf(event.target);
        // console.log(indexMenuItem);

        for (let i = 0; i < menuItem.length; i++) {

            if (menuItem[i].classList.contains('menu_item_active')) {
                menuItem[i].classList.remove('menu_item_active');
            }

            for (let j = 0; j < catalog.length; j++) {

                if (indexMenuItem === j) {
                    catalog[j].style.display = "";
                } else {
                    catalog[j].style.display = "none";
                }  
            }
        }
        this.classList.add('menu_item_active');
    }

    function changeVisibilityCatalogPizza() {
        for (let i = 0; i < catalog.length; i++) {
            if (i === 0) {
                catalog[0].style.display = "";
            } else {
                catalog[i].style.display = "none";
            }            
        }
    }
});