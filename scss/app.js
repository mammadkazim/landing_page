const navMenu = document.querySelector(".nav ul")
const hamburger = document.querySelector('.hamburger');
console.log(hamburger)
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})
