let siguiente = document.querySelector("sig");
let atras = document.querySelector("atras");
let imgActual = document.querySelector("img")
let cont = 0;

function atras() {
    atras.addEventListener('click', e=>{
let tgt = e.target
if(tgt === atras) {
imgActual.style.zIndex = -1;
}
    })
    }


