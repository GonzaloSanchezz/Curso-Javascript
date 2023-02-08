const listaClientes = document.querySelector('#personas');

const personas = JSON.parce (localStorage.getItem('personas'));

document.getElementById("listaClientes").innerText = personas

