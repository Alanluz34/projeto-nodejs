const divEstudantes = document.querySelector('#estudantes')

async function consultaEstudantes () {
  const retorno = await fetch('http://localhost:3000/estudantes')
  const estudantes = await retorno.json()
  preencheTela(estudantes)
}

function preencheTela (estudantes) {
  estudantes.forEach(estudante => {
    const novoEstudanteHTML = `
    <div class="estudante">
    <h3>${estudante.nome}</h3>
    <h3>${estudante.matricula}</h3>
    <h3>${estudante.email}</h3>
    
  </div>
    `
    divEstudantes.innerHTML = divEstudantes.innerHTML + novoEstudanteHTML
  })
}

consultaEstudantes()