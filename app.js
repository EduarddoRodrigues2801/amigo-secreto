let amigosSecretos = [];

function adicionarAmigo() {
    let campoNome = document.getElementById('amigo');
    let nome = campoNome.value.trim(); // Remove espaços extras

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    if (amigosSecretos.includes(nome)) {
        alert('Nome duplicado, insira outro');
        return;
    }

    amigosSecretos.push(nome);
    limparCampo();
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    amigosSecretos.forEach(function (nome) {
        let item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigosSecretos.length === 0) {
        alert('A lista de amigos está vazia! Adicione um nome para sortear.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigosSecretos.length);
    let amigoSorteado = amigosSecretos.splice(indiceSorteado, 1)[0]; // Remove e retorna o sorteado

    document.getElementById("resultado").innerHTML = `O amigo secreto é ??: <strong>${amigoSorteado} 🎉🎉🎉</strong>`;
    atualizarLista(); 
}

function limparCampo() {
    let campoNome = document.getElementById('amigo');
    campoNome.value = '';
}

atualizarLista(); // Atualiza a lista ao iniciar
