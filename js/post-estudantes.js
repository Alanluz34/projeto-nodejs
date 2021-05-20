/* global fetch */

const btn = document.querySelector('#salvar')

btn.addEventListener('click', () => {
  // capturar os dados do formulário
  const estudante = getDadosForm()
  // enviar os dados para api
  enviarDadosParaAPI(estudante)
})

function getDadosForm () {
  const inputNome = document.querySelector('#nome')
  const inputMatricula = document.querySelector('#matricula')
  const inputEmail = document.querySelector('#email')
  if (inputNome.value === null || inputMatricula.value === null || inputEmail.value === null) {
    console.log('campos vazios')
    return
  }

  const estudante = {
    nome: inputNome.value,
    matricula: inputMatricula.value,
    email: inputEmail.value
  }
  return estudante
}

async function enviarDadosParaAPI (estudante) {
  try {
    const resposta = await fetch('http://localhost:3000/estudantes', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(estudante)
    })
    if (resposta.status === 201) {
      limparCampos()
      window.location.href = 'indexestudante.html'
    } else {
      const msg = await resposta.json()
      console.log('Erro ao adicionar estudante', msg)
    }
  } catch (erro) {
    console.error(erro)
  }
}

function limparCampos () {
  document.querySelector('#nome').value = ''
  document.querySelector('#matricula').value = ''
  document.querySelector('#email').value = ''
}