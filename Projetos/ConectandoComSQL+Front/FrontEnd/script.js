async function listarCursos() {
    const resposta = await fetch('http://localhost:3023/cursos');
    const cursos = await resposta.json();

    const lista = document.getElementById('Lista');

    lista.innerHTML = '';

    cursos.forEach(curso => {
        lista.innerHTML += `
            <li>
                ${curso.id} - ${curso.nome}
                <button>Editar</button>
                <button>Excluir</button>
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