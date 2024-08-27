// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const textarea1 = document.querySelector(".textarea1");
const textarea2 = document.querySelector(".textarea2");


function encriptacion(textoencriptado) {
    let LlaveEncriptacion = [
        ["e", "enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]
    ];
    textoencriptado = textoencriptado.toLowerCase();

    for (let i=0; i <LlaveEncriptacion.length;i++){
        if(textoencriptado.includes(LlaveEncriptacion[i][0])){
            textoencriptado=textoencriptado.replaceAll(LlaveEncriptacion[i][0], LlaveEncriptacion[i][1])
        }
    }
    return textoencriptado
}

function desencriptacion(textodesencriptado) {
    let LlaveEncriptacion = [
        ["e", "enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]
    ];
    textodesencriptado = textodesencriptado.toLowerCase();

    for (let i=0; i <LlaveEncriptacion.length;i++){
        if(textodesencriptado.includes(LlaveEncriptacion[i][1])){
            textodesencriptado=textodesencriptado.replaceAll(LlaveEncriptacion[i][1], LlaveEncriptacion[i][0])
        }
    }
    return textodesencriptado
}

function encriptartexto() {
    const textoencriptado1 = encriptacion(textarea1.value)
    textarea2.value = textoencriptado1
    textarea1.value=""
    textarea2.style.backgroundImage = "none"
}

function desencriptartexto() {
    const textodesencriptado1 = desencriptacion(textarea1.value)
    textarea2.value = textodesencriptado1
    textarea1.value=""
    textarea2.style.backgroundImage = "none"
}

document.getElementById('Copiar').addEventListener('click', function() {
    let outputText = document.getElementById('textarea2');
    outputText.select();
    document.execCommand('copy');
    getSelection().removeAllRanges()
    textarea2.value=""
})