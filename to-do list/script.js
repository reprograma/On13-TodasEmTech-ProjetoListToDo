// 1. Capturar entradas e armazenar em variáveis

const novaTarefa = document.querySelector("#input_id");
const botaoAdd = document.getElementById('botao_add_id');
const formulario = document.getElementById('form_id');
const listaDeTarefas = document.getElementById('lista_id');
const botaoMarca = document.getElementById('botao_marca_id');
const botaoLimpa = document.getElementById('botao_limpa_id');

// 2. Processamentos através de eventos e funções

// função de adicionar a partir do click da usuária, um evento
botaoAdd.addEventListener('click', (event) => {
  event.preventDefault()

  const elementoLista = document.createElement('li')
  const textoTarefa = document.createElement('p')
  const iconeDeleta = document.createElement('span')

  textoTarefa.innerText = novaTarefa.value;
  iconeDeleta.innerText = "🗑"

  if(textoTarefa.innerText.trim() === '') {
    alert('Você precisa digitar alguma coisa!')
    
  } else {
    listaDeTarefas.appendChild(elementoLista)
    elementoLista.appendChild(textoTarefa)
    elementoLista.appendChild(iconeDeleta)
    formulario.reset()
  }
  novaTarefa.focus()

  // função para marcar individualmente uma tarefa
  textoTarefa.addEventListener('click', () => {
    
    textoTarefa.classList.toggle('checked')
    
  })

  // função para deletar individualmente uma terefa
  iconeDeleta.addEventListener('click', () => {
    // elementoLista.removeChild(elementoLista)
    elementoLista.remove();
  })
  
})

// função para marcar todas as tarefas:

botaoMarca.addEventListener('click', () => {
  let todasAsTarefas = document.querySelectorAll('p')

  if(botaoMarca.innerText === "Marcar todos") {
    todasAsTarefas.forEach((tarefa) => {
      tarefa.classList.add("checked")
    })
    botaoMarca.innerText = "Desmarcar todos"
  } else {
    todasAsTarefas.forEach((tarefa) => {
      tarefa.classList.remove("checked")
    })
    botaoMarca.innerText = "Marcar todos"
  }
})

// função para limpar todas as tarefas:

botaoLimpa.addEventListener('click', () => {
  listaDeTarefas.innerHTML = '';
})

