let titulo = document.querySelector('h1');
titulo.innerText = "Máximo";
let destaca01 = document.querySelectorAll('h3')
destaca01[0].innerText = "Hemos cambiado destaca01 linea 1";
destaca01[1].innerText = "Hemos cambiado destaca01 linea 2"; 
console.log(destaca01);
let lorem = document.querySelector(".lorem")
lorem.innerHTML="<h2>He cambiado un parrafo por un h2</h2>"
destaca01[0].addEventListener('mouseover', function(){
    destaca01[1].innerText = "Estas pasando el cursor por el primer h3 "
})