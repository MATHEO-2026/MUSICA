function Logar(){

    let login = document.getElementById('Nome').value;
    let senha = document.getElementById('Senha').value;
    let email = document.getElementById('Email').value;

    if(senha == "123" && login == "admin" && email == "admin@gmail.com"){

        localStorage.setItem("logado", "true");

        alert("Sucesso!");
        location.href = "../Index/index.html";

    }
    else{

        alert("Senha, usuário ou e-mail incorretos.");

    }


}