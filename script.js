const text = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");
let copy = document.getElementById("btn");

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */


function encriptadora(){
    const encriptado= encriptar(text.value);
    mensaje.value = encriptado
    text.value="";
    mensaje.style.background="none";
}

function desencriptadora(){
    const encriptado= desencriptar(text.value);
    mensaje.value = encriptado
    text.value="";
    mensaje.style.background="none";
}

function encriptar(stringEncriptado){
let encriptarCodigo= [ ["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]];
stringEncriptado = stringEncriptado.toLowerCase();

for (let i=0; i<encriptarCodigo.length; i++) {
   if (stringEncriptado.includes(encriptarCodigo[i][0])) {
    stringEncriptado = stringEncriptado.replaceAll(encriptarCodigo[i][0], encriptarCodigo[i][1])
   }
  }
  return stringEncriptado;
}

function desencriptar(stringDesencriptado){
    let encriptarCodigo= [ ["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    
    for (let i=0; i<encriptarCodigo.length; i++) {
       if (stringDesencriptado.includes(encriptarCodigo[i][1])) {
        stringDesencriptado = stringDesencriptado.replaceAll(encriptarCodigo[i][1], encriptarCodigo[i][0])
       }
      }
      return stringDesencriptado;
    }

      function clipboard(){
        const texto_out = mensaje
        navigator.clipboard.writeText(texto_out.value)
        .then(function() {
          alert("Texto copiado al portapapeles");
        })
    }

