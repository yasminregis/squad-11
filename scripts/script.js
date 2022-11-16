var nomeDesafio;
function enviar() {
    nomeDesafio = document.getElementById("nome-desafio").value;
    localStorage.info = document.getElementById("nome-representante").value;
    localStorage.info = document.getElementById("nome-empresa").value;
    localStorage.info = document.getElementById("email").value;
    localStorage.info = document.getElementById("whatsapp").value;
    localStorage.info = document.getElementById("discord").value;
    localStorage.info = document.getElementById("representante-substituto").value;
    localStorage.info = document.getElementById("duvidas").value;
    localStorage.info = document.getElementById("descricao-problema").value;
    localStorage.info = document.getElementById("descricao-solucao").value;
    localStorage.info = document.getElementById("tecnologias-sugeridas").value;
    /*localStorage.info = document.getElementById("materiais-referencia").value;*/
    window.alert("Enviado com sucesso!");
}
function carregar() {
    document.getElementById("nome-desafio").value = nomeDesafio;
    document.getElementById("nome-representante").value = localStorage.info;
    document.getElementById("nome-empresa").value = localStorage.info;
    document.getElementById("email").value = localStorage.info;
    document.getElementById("whatsapp").value = localStorage.info;
    document.getElementById("discord").value = localStorage.info;
    document.getElementById("representante-substituto").value = localStorage.info;
    document.getElementById("duvidas").value = localStorage.info;
    document.getElementById("descricao-problema").value = localStorage.info;
    document.getElementById("descricao-solucao").value = localStorage.info;
    document.getElementById("tecnologias-sugeridas").value = localStorage.info;
    /*document.getElementById("materias-refencia").value = localStorage.info;*/
}