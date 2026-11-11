document.addEventListener("DOMContentLoaded", async function () {

    if(localStorage.getItem("logado") === "true"){

        return;
        
    }
    
    const resposta = await fetch("../Formulario/popup.html");

    const html = await resposta.text();

    document.getElementById("popup").innerHTML = html;

    const dialog = document.getElementById("pop-up");

    setTimeout(() => dialog.showModal(), 3000);

})