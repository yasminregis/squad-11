var firstname;
var lastname;
var email;
var number;
var discord;
var nameSubst;
var describeProblem;
var describeSolution;
var tecnolog;

function enviar(){
    firstname = document.getElementById('firstname').value;
    lastname = document.getElementById('lastname').value;
    email = document.getElementById('email').value;
    number = document.getElementById('number').value;
    discord = document.getElementById('discord').value;
    nameSubst = document.getElementById('nameSubst').value;
    describeProblem = document.getElementById('describeProblem').value;
    describeSolution = document.getElementById('describeSolution').value;
    tecnolog = document.getElementById('tecnolog').value;
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('email', email);
    localStorage.setItem('number', number);
    localStorage.setItem('discord', discord);
    localStorage.setItem('nameSubst', nameSubst);
    localStorage.setItem('describeProblem', describeProblem);
    localStorage.setItem('describeSolution', describeSolution);
    localStorage.setItem('tecnolog', tecnolog);
}
function carregar(){
    document.getElementById('firstname').value = localStorage.firstname; 
    document.getElementById('lastname').value = localStorage.lastname; 
    document.getElementById('email').value = localStorage.email; 
    document.getElementById('number').value = localStorage.number; 
    document.getElementById('discord').value = localStorage.discord;
    document.getElementById('nameSubst').value = localStorage.nameSubst; 
    document.getElementById('describeProblem').value = localStorage.describeProblem; 
    document.getElementById('describeSolution').value = localStorage.describeSolution; 
    document.getElementById('tecnolog').value = localStorage.tecnolog; 
}