async function listarCursos() {
    const resposta = await fetch('http://localhost:3023/cursos');
    const cursos = await resposta.json();

    const lista = document.getElementById('Lista');

    lista.innerHTML = '';

    cursos.forEach(curso => {
        lista.innerHTML += `
            <li>
                ${curso.id} - ${curso.nome}
                <button onclick="editarCurso(${curso.id}, '${curso.nome}')">Editar</button>
                <button onclick="excluirCurso(${curso.id})">Excluir</button>
            </li>
        `;
    });
}

async function cadastrarCursos() {
    const nome = document.getElementById('nome').value;
    if (nome === '') {
        alert('Preencha o nome do curso');
        return;
    }
    const resposta = await fetch('http://localhost:3023/cursos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome })
    });
    const dados = await resposta.json();
    alert(dados.mensagem);
    document.getElementById('nome').value = '';
    listarCursos();
}

async function editarCurso(id, nomeAtual) {
    const novoNome = prompt('Digite o novo nome do curso: ', nomeAtual);
    if (!novoNome) return;
    
    await fetch(`http://localhost:3023/cursos/${id}`, {
        method: "PUT", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({nome: novoNome})
    });
    listarCursos();
}

async function excluirCurso(id) {
    if (!confirm('Tem certeza que deseja excluir este curso?')) return;

    await fetch(`http://localhost:3023/cursos/${id}`, {
        method: "DELETE"
    });

    listarCursos();
}