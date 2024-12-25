let texto = document.getElementById('texto');
texto.addEventListener('input', rellenarTexto);

function rellenarTexto() {
    let area = document.getElementById('escrito');
    area.value = texto.value;
}