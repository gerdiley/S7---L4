
var list = document.getElementById('list');
elenco = [];

window.addEventListener('DOMContentLoaded', init);

function init(){
    printData();
}

function printData(){
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        return response.json();
    }).then((data)=>{
        elenco = data;
        if (elenco.length > 0){
            elenco.map(function(element){
                list.innerHTML += `<tr><td>${element.name}</td><td>${element.username}</td><td>${element.email}</td></tr>`
            })
        }
    })
}