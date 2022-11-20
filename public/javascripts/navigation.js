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
    if(!toggle){
        document.querySelector('.nav').classList.add('nav_width930');
        document.querySelector('#container').style.display = 'flex';
        document.querySelector('.menu img').src = '/images/close_menu.png'
    } else{
        document.querySelector('.nav').classList.remove('nav_width930');
        document.querySelector('#container').style.display = 'none';
        document.querySelector('.menu img').src = '/images/menu-50.png'
    }
    toggle = !toggle;
});