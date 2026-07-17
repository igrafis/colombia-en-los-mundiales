// // 1. Le decimos a JS que espere a que todo el HTML de la página esté cargado
// document.addEventListener('DOMContentLoaded', () => {

//     // 2. Buscamos TODAS las tarjetas de la línea de tiempo que tengan la clase ".copa-card"
//     // Esto crea una lista (como un archivador) con todas tus tarjetas (1962, 1990, 2018, etc.)
//     const tarjetas = document.querySelectorAll('.copa-card');

//     // 3. Como son muchas tarjetas, tenemos que aplicar el evento a "cada una" por separado.
//     // .forEach() significa: "Para cada tarjeta que encontraste en la lista, haz lo siguiente:"
//     tarjetas.forEach(tarjetaIndividual => {

//         // 4. Escuchamos cuando el usuario haga clic en una tarjeta específica
//         tarjetaIndividual.addEventListener('click', () => {
            
//             // 5. El interruptor: Le pone o le quita la clase "open" a esa tarjeta donde se hizo clic
//             tarjetaIndividual.classList.toggle('open');
            
//         });

//     });

// });

document.addEventListener('DOMContentLoaded', () => {
    const tarjetas = document.querySelectorAll('.copa-card');

    tarjetas.forEach(tarjeta => {
        // Buscamos la sección de partidos que está DENTRO de esta tarjeta
        const contenedorPartidos = tarjeta.querySelector('.partidos');

        tarjeta.addEventListener('click', () => {
            tarjeta.classList.toggle('open');
            
            // Si la tarjeta se abrió, le damos su altura real en píxeles
            if (tarjeta.classList.contains('open')) {
                // scrollHeight mide el alto real del contenido oculto
                contenedorPartidos.style.maxHeight = contenedorPartidos.scrollHeight + "px";
            } else {
                // Si se cierra, vuelve a cero
                contenedorPartidos.style.maxHeight = "0px";
            }
        });
    });
});