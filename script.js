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

const expRegNom = /^[a-zA-Z\s]+$/;
        const expRegMail = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

        function validarDatos() {
            const nombre = document.getElementById('nom');
            const nom = nombre.value.trim();
            const apellido = document.getElementById('apell');
            const apell = apellido.value.trim();
            const email = document.getElementById('email');
            const correo = email.value.trim();
            const saludo = document.getElementById('saludo');
            const divContacto = document.getElementById('login')
            let nomVacio = document.getElementById('errorNombreVacio');
            let nomInv = document.getElementById('errorNombreInvalido');
            let apellVacio = document.getElementById('errorApellidoVacio');
            let apellInv = document.getElementById('errorApellidoInvalido');
            let emailVacio = document.getElementById('errorEmailVacio')
            let emailInv = document.getElementById('errorEmailInvalido')
            let formValido = true;
          

            for (v of frm.querySelectorAll("input, label")){
                    v.classList.remove("error");
                    v.classList.remove("visible")

            }

            if (nom == "") {
                nomVacio.classList.add('visible');
                nombre.classList.add('error');
                formValido = false;
               
            } else if (!expRegNom.test(nom)) {
                nomInv.classList.add('visible');
                nombre.classList.add('error');
                formValido = false;
                
            }

            if (apell == "") {
                apellVacio.classList.add('visible');
                apellido.classList.add('error');
                formValido = false;
                
            } else if (!expRegNom.test(apell)) {
                apellInv.classList.add('visible');
                apellido.classList.add('error');
                formValido = false;
            }

            if (correo == "") {
                emailVacio.classList.add('visible');
                email.classList.add('error');
                formValido = false;
                
            } else if (!expRegMail.test(correo)) {
                emailInv.classList.add('visible');
                email.classList.add('error');
                formValido = false;
            }

            if(formValido) {
                saludo.classList.add('visible')
                login.classList.add('invisible')

            }
          
            return false;
        }

carrusel();

