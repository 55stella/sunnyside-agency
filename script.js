let menuBtn = document.querySelector('#menu-open')
let navBtn = document.querySelector('nav')


menuBtn.onclick =function(){
    navBtn.classList.toggle('open')
}