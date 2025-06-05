const bolsa = document.getElementById('bolsa');
const elementos1 = document.getElementById ('lista-1');
const lista = document.querySelector('.lista-bolsa tbody');
const vaciarbolsaBtn = document.getElementById('vaciar-bolsa');

cargarEventListeners();

function cargarEventListeners() {

    elementos1.addEventListener('click', comprarElemento);
    bolsa.addEventListener('click', eliminarElemento);
    vaciarbolsaBtn.addEventListener('click',vaciarBolsa);
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-bolsa')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        Imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a'). getAttribute('data-id')
    }
    insertarBolsa(infoElemento);
}

function insertarBolsa(elemento){
const row = document.createElement('tr');
row.innerHTML = `
<td>
<img src='${elemento.Imagen}' width=100>
</td>
<td>
${elemento.titulo}
</td>
<td>
${elemento.precio}
</td>
<td>
<a href='#' class = 'borrar' data-id='${elemento.id}'> X </a>
</td>
`;                                         
lista.appendChild(row);
}

function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoId
    if (e.target.classList.contains ('borrar')) {
e.target.parentElement.parentElement.remove();
elemento = e.target.parentElement.parentElement;
elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarBolsa(){
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}
