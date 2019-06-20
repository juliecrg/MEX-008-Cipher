const importantes = () => {

    let offset = document.getElementById ("claveNumero").value;
    let string = document.getElementById ("palabraCursi").value;       
    let textoCifrado = window.cipher.encode(offset,string);
    document.getElementById("textResult").innerHTML = textoCifrado;
}
document.getElementById ("botonListoC").addEventListener("click",importantes);

const segundoImportantes = () => {
    let offset = document.getElementById ("claveNumero").value;
    let string = document.getElementById ("palabraCursi").value;
    let textoDescifrado=window.cipher.encode(offset,string);
    document.getElementById("textResult").innerHTML = textoDescifrado;
}
document.getElementById ("botonListoD").addEventListener("click",segundoImportantes);



