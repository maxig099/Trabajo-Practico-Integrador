function carrusel(){
    document.addEventListener('DOMContentLoaded', () => {
        let siguiente = document.querySelector(".sig");
        let atras = document.querySelector(".atras");
        let imagenes = document.querySelectorAll(".carruselImg img");
        let cont = 0;
    
        siguiente.addEventListener('click', () => {
            imagenes[cont].classList.remove('actual');
            cont = cont + 1;
            if (cont >= imagenes.length) {
                cont = 0; 
            }
            imagenes[cont].classList.add('actual');
        });
        
    
        atras.addEventListener('click', () => {
            imagenes[cont].classList.remove('actual');
            cont = cont - 1;
            if (cont < 0) {
                cont = imagenes.length - 1;
            }
            imagenes[cont].classList.add('actual');
        });
        
    });
}

const expRegNom = /^[a-zA-Z]$/;

function validarDatos() {
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');

    console.log(nombre.value)

    if(nombre.value == "" || !expRegNom.test(nombre.value)) {
        console.log("Error")
    }
    if(apellido.value == "" || !expRegNom.test(apellido.value)) {
        console.log("Error")
    }
    if(email.value == "" || !expRegNom.test(nombre.value)) {
        console.log("Error")
    }
    return false;
}

carrusel();

