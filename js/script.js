
const textoVazio = document.getElementById("textoVazio");
const textoInfo = document.getElementById("textoInfo");

naoMostrar();

function naoMostrar(){
  textoInfo.style.display ="none";
}

function criptografar(){
  const texto = document.getElementById("texto").value;
  var textoModificado = "";
  var resultado = document.getElementById("resultado");
  
  if (texto !== "") {
  for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) == 'a') {
      textoModificado += "ai";
    } else if (texto.charAt(i) == 'e') {
      textoModificado += "enter";
    } else if (texto.charAt(i) == 'i') {
      textoModificado += "imes";
    } else if (texto.charAt(i) == 'o') {
      textoModificado += "ober";
    } else if (texto.charAt(i) == 'u') {
      textoModificado += "ufat";
    } else {
      textoModificado += texto.charAt(i);
    }
  }
  textoVazio.style.display = "none";
  textoInfo.style.display ="block";
  console.log(textoModificado);
  console.log(texto);
  resultado.value = textoModificado;
}else{
  textoVazio.style.display = "block";
  
}

}

function descriptografar(){
  const texto = document.getElementById("texto").value;
  var textoModificado = texto;
  var resultado = document.getElementById("resultado");
if(texto !== ""){
  textoModificado = textoModificado.replace(/ai/g, "a")
                                    .replace(/enter/g,"e")
                                    .replace(/imes/g, "i")
                                    .replace(/ober/g,"o")
                                    .replace(/ufat/g,"u");
  textoVazio.style.display = "none";
  textoInfo.style.display ="block";
  console.log(textoModificado)
  resultado.value = textoModificado;
}else{
  textoVazio.style.display = "block";
}

}

function copiarTexto(){
  const copiar = document.getElementById("resultado");

  copiar.select();
  copiar.setSelectionRange(0,99999);

  navigator.clipboard.writeText(copiar.value);

}


