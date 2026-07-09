async function listarCursos() {
    const resposta = await fetch('http://localhost:3023/cursos');
    const cursos = await resposta.json();

    const lista = document.getElementById('Lista');

    lista.innerHTML = '';

    cursos.forEach(curso => {
        lista.innerHTML += `
            <li>
                ${curso.id} - ${curso.nome}
            </li>
        `;
    });
}