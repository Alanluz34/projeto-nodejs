/* global fetch */

const btn = document.querySelector('#salvar')

btn.addEventListener('click', () => {
  // capturar os dados do formulário
  const curso = getDadosForm()
  // enviar os dados para api
  enviarDadosParaAPI(curso)
})

function getDadosForm () {
  const inputNome = document.querySelector('#nome')
  const inputCh = document.querySelector('#ch')
  if (inputNome.value === null || inputCh.value === null) {
    console.log('campos vazios')
    return
  }

  const curso = {
    nome: inputNome.value,
    ch: inputCh.value
  }
  return curso
}

async function enviarDadosParaAPI (curso) {
  try {
    const resposta = await fetch('http://localhost:3000/cursos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(curso)
    })
    if (resposta.status === 201) {
      limparCampos()
      window.location.href = 'index.html'
    } else {
      console.log('Erro ao adicionar curso')
    }
  } catch (erro) {
    console.error(erro)
  }
}

function limparCampos () {
  document.querySelector('#nome').value = ''
  document.querySelector('#ch').value = ''
}