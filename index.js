const burger = document.querySelector('.fa-bars')
const mobileNav = document.querySelector('.mobile-nav')
const selected = document.querySelectorAll('.mobile-nav a')
burger.addEventListener('click', ()=>{
    burger.classList.toggle('fa-xmark')
    mobileNav.classList.toggle('is-active')
    mobileNav.classList.remove('is-not-active')
})


for (let i = 0; i<selected.length;i++){
    selected[i].addEventListener('click',()=>{
        burger.classList.add('fa-bars')
        burger.classList.remove('fa-xmark')
        mobileNav.classList.add('is-not-active')
        mobileNav.classList.remove('is-active')
        console.log('clicked');
    })
}