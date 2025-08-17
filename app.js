// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;

        if (nombre.trim() === "") {
            alert("Por favor, inserte un nombre.");
        }
        else {
            amigos.push(nombre);
            console.log(amigos);
            document.getElementById("amigo").value="";
        }
        document.getElementById("amigo").focus();
        mostrarLista();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    
    lista.innerHTML = "";
        
    for (let i = 0; i < amigos.length; i=i+1) {

        let li = document.createElement("li");
        li.textContent = `${i+1}. ${amigos[i]}`
        lista.appendChild(li);
    }


}