const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const mensaje = document.getElementById("mensaje")
const file = document.getElementById("file")
const enviar = document.getElementById("enviar")

let mensajeParaEnviar = document.getElementById("mensajefinal")

// Añadir eventos de entrada a cada campo del formulario 
nombre.addEventListener('input', crearMensaje); 
email.addEventListener('input', crearMensaje); 
phone.addEventListener('input', crearMensaje); 
mensaje.addEventListener('input', crearMensaje); 
file.addEventListener('input', crearMensaje);

function crearMensaje() { 
    let mensajeTerminado = "Hola, mi nombre es " + nombre.value + ". Os envío la foto " + file.value + " con el siguiente mensaje: " + mensaje.value; 
    mensajeParaEnviar.value = mensajeTerminado; 

    mensajeParaEnviar.innerText = mensajeTerminado
}

mensajeParaEnviar.addEventListener('change',crearMensaje(mensajeTerminado))

enviar.addEventListener('click',function(event){
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional 
    const phoneNumber = phone.value; 
    const message = mensaje.value; 
    const whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`; 
    window.open(whatsappUrl, '_blank');
})