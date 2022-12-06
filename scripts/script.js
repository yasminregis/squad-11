var cadastroDesafio = [];
var desafioCadastrado= [];
var idDesafio = 0;
var firstname;
var lastname;
var email;
var number;
var discord;
var nameSubst;
var describeProblem;
var describeSolution;
var tecnolog;
var desafioArmazenado;
var desafioCadastradoFiltrado = [];

function enviar(){
    localStorage.ultimoId = 0;
    if(localStorage.meuArr){
        desafioCadastrado = JSON.parse(localStorage.getItem('meuArr'));
        for(var i in desafioCadastrado){
            localStorage.ultimoId = ++i;
        }
        this.idDesafio = localStorage.ultimoId;
    }
    this.idDesafio = idDesafio++;
    firstname = document.getElementById('firstname').value;
    lastname = document.getElementById('lastname').value;
    email = document.getElementById('email').value;
    number = document.getElementById('number').value;
    discord = document.getElementById('discord').value;
    nameSubst = document.getElementById('nameSubst').value;
    describeProblem = document.getElementById('describeProblem').value;
    describeSolution = document.getElementById('describeSolution').value;
    tecnolog = document.getElementById('tecnolog').value;
    
    cadastroDesafio.push(idDesafio, firstname, lastname, email, number, discord, nameSubst, describeProblem, describeSolution, tecnolog);
    desafioCadastrado.push(cadastroDesafio);
    cadastroDesafio = [];
    
    document.getElementById('firstname').value = ''; 
    document.getElementById('lastname').value = ''; 
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
    document.getElementById('discord').value = '';
    document.getElementById('nameSubst').value = ''; 
    document.getElementById('describeProblem').value = ''; 
    document.getElementById('describeSolution').value= ''; 
    document.getElementById('tecnolog').value = ''; 

    localStorage.meuArr = JSON.stringify(desafioCadastrado);
}

function show() {
    let section = document.getElementById('section');
    let card = document.getElementById('card');
    section.innerHTML = '';
    card.innerHTML = '';
    localStorage.desafioArmazenado = '';


    if(localStorage.meuArr){
        desafioCadastrado = JSON.parse(localStorage.getItem('meuArr'));
    }

    for(var i in desafioCadastrado){
        var a = document.createElement('a');
        a.href="desafio-selecionado.html";
        a.setAttribute('onclick', "armazenarDesafio("+ this.desafioCadastrado[i][0] + ")");

        var div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('itemPesquisa');
        div.classList.add(desafioCadastrado[i][1]);
        

        var h2 = document.createElement('h2');
        h2.innerHTML = desafioCadastrado[i][1];

        var p = document.createElement('p');
        p.innerHTML = desafioCadastrado[i][7];

        a.append(h2,p);
        div.append(a);
        section.append(div);
        localStorage.ultimoId = i++;
    }
    localStorage.meuArr = JSON.stringify(desafioCadastrado); 
}
function titulo(){
    let titulo = document.getElementById('titulo');
    titulo.innerHTML = '';
    let h1 = document.createElement('h1');

    if(localStorage.meuArr){
        desafioCadastrado = JSON.parse(localStorage.getItem('meuArr'));
    }
    for(var i in desafioCadastrado){
        if(i == localStorage.desafioArmazenado){
            h1.innerHTML = (desafioCadastrado[i][2] + " - #" + desafioCadastrado[i][1]);
            titulo.append(h1);
        }
    }
    localStorage.meuArr = JSON.stringify(desafioCadastrado);
}

function problema(){
    let problema = document.getElementById('problema');
    problema.innerHTML = '';
    let p = document.createElement('p');

    if(localStorage.meuArr){
        desafioCadastrado = JSON.parse(localStorage.getItem('meuArr'));
    }
    for(var i in desafioCadastrado){
        if(i == localStorage.desafioArmazenado){
            p.innerHTML = desafioCadastrado[i][7];
            problema.append(p);
        }
    }
    localStorage.meuArr = JSON.stringify(desafioCadastrado);
}
function solucao(){
    let solucao = document.getElementById('solucao');
    solucao.innerHTML = '';
    let p2 = document.createElement('p');

    if(localStorage.meuArr){
        desafioCadastrado = JSON.parse(localStorage.getItem('meuArr'));
    }
    for(var i in desafioCadastrado){
        if(i == localStorage.desafioArmazenado){
            p2.innerHTML = desafioCadastrado[i][8];
            solucao.append(p2);
        }
    }
    localStorage.meuArr = JSON.stringify(desafioCadastrado);
}
function tecnologias() {
    let tecnologias = document.getElementById('tecnologias');
    tecnologias.innerHTML = '';
    let p3 = document.createElement('p');

    if(localStorage.meuArr){
        desafioCadastrado = JSON.parse(localStorage.getItem('meuArr'));
    }
    for(var i in desafioCadastrado){
        if(i == localStorage.desafioArmazenado){
            p3.innerHTML = desafioCadastrado[i][9];
            tecnologias.append(p3);
        }
    }
    localStorage.meuArr = JSON.stringify(desafioCadastrado);
}
function representante() {
    let Representante = document.getElementById('Representante');
    Representante.innerHTML = '';
    let p4 = document.createElement('p');

    if(localStorage.meuArr){
        desafioCadastrado = JSON.parse(localStorage.getItem('meuArr'));
    }
    for(var i in desafioCadastrado){
        if(i == localStorage.desafioArmazenado){
            p4.innerHTML = desafioCadastrado[i][6];
            Representante.append(p4);
        }
    }
    localStorage.meuArr = JSON.stringify(desafioCadastrado);
}
function Email() {
    let Email = document.getElementById('Email');
    Email.innerHTML = '';
    let p5 = document.createElement('p');

    if(localStorage.meuArr){
        desafioCadastrado = JSON.parse(localStorage.getItem('meuArr'));
    }
    for(var i in desafioCadastrado){
        if(i == localStorage.desafioArmazenado){
            p5.innerHTML = desafioCadastrado[i][3];
            Email.append(p5);
        }
    }
    localStorage.meuArr = JSON.stringify(desafioCadastrado);
}
function Discord() {
    let Discord = document.getElementById('Discord');
    Discord.innerHTML = '';
    let p6 = document.createElement('p');

    if(localStorage.meuArr){
        desafioCadastrado = JSON.parse(localStorage.getItem('meuArr'));
    }
    for(var i in desafioCadastrado){
        if((i) == localStorage.desafioArmazenado){
            p6.innerHTML = desafioCadastrado[i][5];
            Discord.append(p6);
        }
    }
    localStorage.meuArr = JSON.stringify(desafioCadastrado);
}

function armazenarDesafio(idDesafio){
    localStorage.desafioArmazenado = idDesafio;
}

function pesquisar(){
    let input = document.getElementsByName('search');
    let valorPesquisa = input[0].value;    
    desafioCadastradoFiltrado = desafioCadastrado.filter(item => item[1].includes(valorPesquisa));    

    let itens = document.getElementsByClassName('itemPesquisa');
    
    for (let index = 0; index < itens.length; index++) {        
       const element = itens[index];

       console.log("🚀 ~ file: script.js:263 ~ pesquisar ~ itens[index]", itens[index].classList)
       if(itens[index].classList[2].includes(valorPesquisa)){
        element.style.display="flex";
       }else{
        element.style.display="none";
       }
    }
}
