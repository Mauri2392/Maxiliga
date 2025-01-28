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

document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todos los botones y contenidos de los acordeones
    const acordeonBtns = document.querySelectorAll(".acordeon-btn");
  
    acordeonBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const acordeonContent = btn.nextElementSibling;
  
        // Verificamos si el contenido está abierto
        const isOpen = acordeonContent.style.maxHeight;
  
        // Cerramos si está abierto, o lo expandimos si está cerrado
        if (isOpen) {
          acordeonContent.style.maxHeight = null;
        } else {
          acordeonContent.style.maxHeight = acordeonContent.scrollHeight + "px";
        }
      });
    });
  });
  
