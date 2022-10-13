
document.addEventListener('DOMContentLoaded', function () {
    iniciarApp()
});

function iniciarApp() {
    // navegacionFija();
    crearGaleria();
    // scrollNav();
};

// EL SIGUIENTE CODIGO ES PARA AGREGAR UN EFECTO AL DARLE CLICK EN LOS ENLACES DE
// DE LA BARRA DE NAVEGACION, LAMENTABLEMTE AUN NO FUNCIONA

/* function navegacionFija() {
    const barra = document.querySelectorAll('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body')

    window.addEventListener('scroll', function(){
        console.log(sobreFestival.getBoundingClientRect());
        
        if (sobreFestival.getBoundingClientRect().bottom < 0) {
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
            
        } else {
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });
} */
///////////////////////////////////////////////////////////////////////////////////

// EL SIGUIENTE CODIGO ES PARA AGREGAR UN EFECTO AL DARLE CLICK EN LOS ENLACES DE
// DE LA BARRA DE NAVEGACION, LAMENTABLEMTE AUN NO FUNCIONA

/* function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();
          
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior: "smooth"});
        });
        
    });
} */

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes')

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = 
        `<source srcset="build/img/thumb/${i}.webp" type="imagen/webp">
        <img loading="lazy" whidth="200" heigth="300" src="build/img/thumb/${i}.jpg" alt="imagen-galeria">`;
        
        
        imagen.onclick = function () {
            mostrarImagen(i);
        }
        
        galeria.appendChild(imagen);
        
    }
}

function mostrarImagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = 
    `<source srcset="build/img/grande/${id}.webp" type="imagen/webp">
    <img loading="lazy" whidth="200" heigth="300" src="build/img/grande/${id}.jpg" alt="imagen-galeria">`;


    // crea el Overlay con la imagen
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body')
        overlay.remove();
    }


    //Boton para cerrar el Modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar')
    cerrarModal.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body')
        overlay.remove();
    }
    overlay.appendChild(cerrarModal)

    //Añadirlo al HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body')



}