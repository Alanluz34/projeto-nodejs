const divCursos = document.querySelector('#cursos')

async function consultaCursos () {
  const retorno = await fetch('http://localhost:3000/cursos')
  const cursos = await retorno.json()
  preencheTela(cursos)
}

function preencheTela (cursos) {
  cursos.forEach(curso => {
    const novoCursoHTML = `
    <div class="curso">
    <h3>${curso.nome}</h3>
    <p>Carga horária: ${curso.ch} horas</p>
  </div>
    `
    divCursos.innerHTML = divCursos.innerHTML + novoCursoHTML
  })
}

consultaCursos()