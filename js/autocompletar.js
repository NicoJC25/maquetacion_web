let palabrasclave = [
    'Asesinatos',
    'Sobornos',
    'Secuestro',
    'Desapariciones',
    'Politicos(Premium)'
];

const cajaBuscador = document.querySelector(".buscador");
const cajaEntrada = cajaBuscador.querySelector("input");
const cajaBusqueda = cajaBuscador.querySelector(".busqueda");
const icon = cajaBuscador.querySelector(".icon")
let marcadorLink = cajaBuscador.querySelector("a");
let linkPagina;


cajaEntrada.onkeyup = (e) => {
    let resultados = [];
    let datoUsuario = e.target.value;
    if (datoUsuario){
        
        icon.onclick = () => {
            linkPagina = `https://www.google.com/search?q=${datoUsuario}`;
            marcadorLink.setAttribute("href", linkPagina);
            marcadorLink.click();
        }

        resultados = palabrasclave.filter((data) => {
            return data.toLocaleLowerCase().startsWith(datoUsuario.toLocaleLowerCase());

    });
        resultados = resultados.map((data) => {
            return data = `<li>${data}</li>`
    });

    cajaBuscador.classList.add("active");
    mostrarResultados(resultados);
    let todaLista = cajaBusqueda.querySelectorAll("li");
    for(let i = 0; i< todaLista.length; i++) {
        todaLista[i].setAttribute("onclick", "seleccionar(this)");
    }
    }else{
        cajaBuscador.classList.remove("active")
    } 
}

function seleccionar(element){
    let seleccionarDato = element.textContent;
    cajaEntrada.value = seleccionarDato;
    icon.onclick = () => {
        linkPagina = `https://www.google.com/search?q=${seleccionarDato}`;
        marcadorLink.setAttribute("href", linkPagina);
        marcadorLink.click();
    }
    cajaBuscador.classList.remove("active")
}
        
function mostrarResultados(list){
    let listaDatos;
    if(!list.length){
        valorUsuario = cajaEntrada.value;
        listaDatos = `<li>${valorUsuario}</li>`
    }else{
        listaDatos = list.join('');
    }
    cajaBusqueda.innerHTML = listaDatos;
}