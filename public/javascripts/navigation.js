let search_field = document.querySelector('#search_field');
let menu = document.querySelector('.menu');

search_field.addEventListener('focus', ()=>{
    document.querySelector('.search .img').style.animationName = 'SearchImage';
});

search_field.addEventListener('focusout', ()=>{
    document.querySelector('.search .img').style.animationName = 'SearchImageReverse';
});

let toggle = false;
menu.addEventListener('click', ()=>{
    const navigation = document.querySelector('.nav');
    const container = document.querySelector('#container');
    const menuImage = document.querySelector('.menu img');
    if(!toggle){
        navigation.classList.add('nav_width930');
        container.style.display = 'flex';
        menuImage.src = '/images/close_menu.png'
    } else{
        navigation.classList.remove('nav_width930');
        container.style.display = 'none';
        menuImage.src = '/images/menu-50.png'
    }
    toggle = !toggle;
});