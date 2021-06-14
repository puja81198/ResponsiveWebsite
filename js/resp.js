burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navList = document.querySelector('.navList')

burger.addEventListener('click',()=>{
    rightNavr.classList.toggle('v-class-resp')
    navList.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})