// Seu código Javascript vem aqui

var Lmin = "abcdefghijklmnopqrstuvwxyz"
var Lmai = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = "0123456789"
var sim = "!@#$%&*"

addEventListener("DOMContentLoaded", () => {
    const senha = document.getElementById("generate")
    console.log(senha)

    const generateButton = (document.getElementById('generate'))
    generateButton.addEventListener('click', function () {

        const length =
            parseInt(document.getElementById('lenght').value);

        const uppercase =
            document.getElementById('uppercase').checked;

        const lowercase =
            document.getElementById('uppercase').checked;

        const numbers =
            document.getElementById('uppercase').checked;

        const symbols =
            document.getElementById('uppercase').checked;

        if (!uppercase && !lowercase && !numbers && !symbols) {
            alert("Selecione pelo menos uma opção")
        }
    })

    let showSenha = document.querySelector("#output")
    generateButton.addEventListener("click", () => { showSenha.innerHTML = `Senha: ${novaSenha()}` })

    let novaSenha = () => {
        var caracteres = [Lmin, Lmai, num, sim]

        var tamanhoSenha = document.querySelector("#length").value
        for (var i = 0; i < tamanhoSenha; i++) {

            let newSenha = "#"
            tamanhoSenha = (caracteres.length)
            newSenha += caracteres
        }
        console.log(newSenha)
        return newSenha
    }
})