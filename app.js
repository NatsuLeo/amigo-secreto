let listaAmigos = [];

function agregarAmigos(){
    let amigos = document.getElementById("amigo").value;
    if (amigos == ''){
        alert('Agrega un nombre valido')
    } else {
        listaAmigos.push(amigos);
        mostrarLista();
        limpiarCaja();
    }
}

function mostrarLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 

    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    let sorteo = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteo = listaAmigos[sorteo];
    let mostrarSorteo = document.getElementById('resultado');
    mostrarSorteo.innerHTML = `<li>${amigoSorteo}</li>`;
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    //aaaaaa
}