/* 👇Esta contante alamcena el texto introcido por el usiario👇*/
const textArea = document.querySelector(".text-area");

/*👇Esta constante almacena el mensaje encriptado👇*/
const mensaje = document.querySelector(".mensaje");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function btnEncriptar(){
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value="";
  mensaje.style.backgroundImage = "none";
}

function encriptar (stringEncriptado){
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
      ];
    
      stringEncriptado = stringEncriptado.toLowerCase();
    
      for (let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
      }
      return stringEncriptado;
}


function btnDesencriptar(){
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value="";

}

function desencriptar (stringDesencriptado){
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  
    stringDesencriptado = stringDesencriptado.toLowerCase();
  
    for (let i = 0; i < matrizCodigo.length; i++){
      if (stringDesencriptado.includes(matrizCodigo[i][0])){
        stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
      }
    }
    return stringDesencriptado;
}

function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
  alert("Listo Nene Mensaje Encriptado Copiado!");
}

document.querySelector("#copy").addEventListener("click", copy);


/*
function copiar(){
    var contenido = encriptext;
    contenido.select();
    document.execCommand("copy");    
    alert("Mensaje Encriptado Copiado!");
}*/