function validarFormulario() {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input");

    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.classList.add("invalid");
            isValid = false;
        }
        else {
            input.classList.remove("invalid")
        }
    });
    return isValid;
}





function enviarFormulario() {
    if (validarFormulario()) {
        enviarParaWhatsapp();
    }
}

function enviarParaWhatsapp() {
    const nome = document.getElementById("inputNome").value;
    const email = document.getElementById("inputEmail").value;
    const mensagem = document.getElementById("textAreaMensagem").value;

    const texto = `Nome: ${nome} \nE-mail: ${email} \nMensagem ${mensagem}`;
    const textoCodificado = encodeURIComponent(texto);
    const numeroWhatsapp = "5583998518119";
    const url = `https://wa.me/${numeroWhatsapp}?text=${textoCodificado}`;

    window.open(url, `_blank`);
}