let navbar = document.querySelector('.header .navbar');
let menu  = document.querySelector('#menu');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}; 

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}; 


let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

}; 

AOS.init({
    duration:800,
    delay:200
}); 