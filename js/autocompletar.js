let palabrasclave = [
    'Asesinatos',
    'Sobornos',
    'Secuestro',
    'Desapariciones',
    'Politicos(Premium)'
];

const cajaResultado = document.querySelector(".busqueda");
const cajaEntrada = document.getElementById("buscar");

cajaEntrada.onkeyup = function(){
    let resultado = [];
    let entrada = cajaEntrada.value;
    if (entrada.length){
        resultado = palabrasclave.filter((keyword) => {
            return keyword.toLowerCase().includes(entrada.toLowerCase());
        });
        console.log(resultado)
    }
    display(resultado);

    if (!resultado.length){
        cajaResultado.innerHTML = '';
    }
}

function display(resultado){
    const contenido = resultado.map((list) => {
        return '<li onclick=selectInput(this)>' + list +"</li>";
    });

    cajaResultado.innerHTML = '<ul>' + contenido.join('') + '</ul>';
}

function selectInput(list){
    cajaEntrada.value = list.innerHTML;
    cajaResultado.innerHTML = '';
}


