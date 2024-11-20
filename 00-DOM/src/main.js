/**
 * @author
 */

//// FUNCTIONS \\\\
function handleSpanClick(event){
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    event.target.style.backgroundColor = randomColor;
}

function handlePafDoubleClick(event){
    alert(event.target.textContent);
}

function handleKeyDown(event){
    if(event.key === 'Enter'){
        document.getElementsByTagName('h1')[0].innerText = event.key
        // .innerText('event.key');
    }
}

function handleEnterDown(event){
    if(event.key === 'Enter'){
        //random text supossed to happen here
    }
}

function handleEtiquetaClick(event){
    event.target.parentNode.removeChild(event.target);
}

function handleMouseOver(event){
    event.target.style.color = 'blue';
}

function handleMouseOut(event){
    event.target.style.color = 'black';
}

function handleImageClick(event){
    document.querySelectorAll('#contenedorPrincipal p').forEach((p) => {
        p.style.fontSize = Number.parseInt(window.getComputedStyle(p).fontSize) * 2 + 'px';
    });
}

////// RELACION 1 \\\\\\
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Ejercicio 1
     * Selecciona el elemento `h1` por su ID.
     */
    const elementDiv = document.getElementById('contenedorPrincipal');
    // const element = elementDiv.querySelector();

    /**
     * Ejercicio 2
     */
    const parrafosDiv = document.querySelectorAll('#contenedorPrincipal .parrafo');
    console.log(parrafosDiv);

    /**
     * Ejercicio 3
     */
    const elementImg = document.querySelector('img[src="imagen.png"]');
    console.log(elementImg);

    /**
     * Ejercicio 4
     */
    const elementSec = document.querySelectorAll('#contenedorSecundario span');
    console.log(elementSec);

    /**
     * Ejercicio 5
     * Selecciona el primer párrafo con la clase "importante".
     */
    const elementImp = document.querySelector('.parrafo.importante');
    console.log(elementImp);

    /**
     * Ejercicio 6
     * Selecciona todos los párrafos que están dentro de un elemento con el `id` "contenedorPrincipal".
     */
    const elementPaf = document.querySelectorAll('#contenedorPrincipal p');
    console.log(elementPaf);

    /**
     * Ejercicio 7
     * Selecciona todos los elementos que tienen el atributo `data-atributo` con valor "valor1".
     */
    const element7 = document.querySelectorAll('[data-atributo="valor1"]');
    console.log(element7);

    /**
     * Ejercicio 8
     * Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".
     */
    const element8 = document.querySelectorAll('.parrafo.importante');
    element8.length > 1 ? console.log(element8[1]) : console.log('No object found');

    /**
     * Ejercicio 9
     * Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase "contenedor".
     */
    const element9 = document.querySelectorAll('.contenedor span');
    console.log(element9);

    /**
     * Ejercicio 10
     * Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase "parrafo".
     */
    const element10 = document.querySelectorAll('#contenedorPrincipal .parrafo');
    element10.length > 2 ? console.log(element8[2]) : console.log('No object found');

    //////// RELACION 2 \\\\\\\\
    /**
     * Ejercicio 1
     * Añade un evento de clic a todos los elementos `<span>` dentro del `contenedorSecundario`.
     * Cuando se haga clic, cambia el color de fondo del elemento al azar.
     */
    document.querySelectorAll('#contenedorSecundario span').forEach((span) => {
        span.addEventListener('click', handleSpanClick);
    });

    /**
     * Ejercicio 2
     * Crea una función que muestre una alerta con el contenido de cualquier párrafo que tenga
     * la clase "parrafo" cuando se haga doble clic en él.
     */
    document.querySelectorAll('.parrafo').forEach((parrafo) => {
        parrafo.addEventListener('dblClick', handlePafDoubleClick);
    });

    /**
     * Ejercicio 3
     * Añade un evento de cambio a un `<select>` que está fuera del `contenedorPrincipal`.
     * Cuando se cambie el valor, actualiza el texto del elemento `h1` al nuevo valor seleccionado.
     */
    // document.addEventListener('keydown', handleKeyDown);

    /**
     * Ejercicio 4
     * Crea una función que cambie el contenido de todos los párrafos dentro del `contenedorSecundario`
     * cuando se presione la tecla "Enter". El nuevo contenido debe ser un texto aleatorio 
     * (por ejemplo, "Nuevo contenido").
     */
    document.addEventListener('keydown', handleEnterDown);

    /**
     * Ejercicio 5
     * Añade un evento de clic a cualquier elemento con la clase "etiqueta".
     * Cuando se haga clic, elimina el elemento del DOM.
     */
    document.querySelectorAll('.etiqueta').forEach((etiqueta) => {
        etiqueta.addEventListener('click', handleEtiquetaClick);
    });

    /**
     * Ejercicio 6
     * Crea una función que cambie el color de todos los elementos `<span>` dentro del
     * `contenedorSecundario` cuando se mueva el mouse sobre ellos.
     * El nuevo color debe ser azul.
     */
    document.querySelectorAll('#contenedorSecundario span').forEach((span) => {
        span.addEventListener('mouseover', handleMouseOver);
        span.addEventListener('mouseout', handleMouseOut);
    });

    /**
     * Ejercicio 7
     * Añade un evento de carga a la página. Cuando la página se cargue, 
     * muestra una alerta con el texto "Página cargada".
     */
    /* window.addEventListener('load', () => {
        alert('Página cargada');
    }); */
    
    /**
     * Ejercicio 8
     * Crea una función que cambie el tamaño del texto de todos los párrafos dentro del
     * `contenedorPrincipal` cuando se haga clic en el elemento `img`. El nuevo tamaño debe
     * ser el doble del tamaño actual.
     */
    document.querySelector('img').addEventListener('click', handleImageClick);
});

