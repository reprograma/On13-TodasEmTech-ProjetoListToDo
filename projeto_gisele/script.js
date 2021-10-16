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
    iconeDeleta.innerText = "🗑️"

    if(textoTarefa.innerText.trim() === '') {
    //alert('Você precisa digitar alguma coisa!')
    /* DESAFIO 1
    novaTarefa.classList.add('erro'); //adiciona classe erro ao elemento novaTarefa (input) - a classe está no css
    novaTarefa.addEventListener('animationend', event => { 
        novaTarefa.classList.remove('erro');
    }) */

    //Desafio 1 - monitoria
    novaTarefa.classList.add('empty_erro');
    novaTarefa.addEventListener('animationend', event => {
        novaTarefa.classList.remove('empty_erro');
    })

    } else {
        listaDeTarefas.appendChild(elementoLista)
        elementoLista.appendChild(textoTarefa)
        elementoLista.appendChild(iconeDeleta)
        formulario.reset()
        novaTarefa.classList.remove('empty_erro')
    }
    novaTarefa.focus()

    /*Teste de evento com change
    novaTarefa.addEventListener('change', event => {
    novaTarefa.classList.remove('empty_erro');
    })*/

  // função para marcar individualmente uma tarefa
        textoTarefa.addEventListener('click', () => {
    // if(!textoTarefa.classList.contains('checked')) {
    //   textoTarefa.classList.add('checked')
    // } else {
    //   textoTarefa.classList.remove('checked')
    // }
        textoTarefa.classList.toggle('checked')
    verificarMarcados() // chama a função do DESAFIO 2 para mudar o texto do botão quando marcar um item individual, se necessário
    })

  // função para deletar individualmente uma terefa
        iconeDeleta.addEventListener('click', () => {
    // elementoLista.removeChild(elementoLista)
        elementoLista.remove();
    })
  verificarMarcados() // chama a função do DESAFIO 2 para mudar o texto do botão quando adicionar nova tarefa, se necessário
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

// ### DESAFIO 2 ###
// função que verifica se se todos estão marcados

function verificarMarcados() {
let todasAsTarefas = document.querySelectorAll('p')
  let verificacao = [] //array vazia que recebe as tarefas que estão desmarcadas (que não possui classe checked)

  todasAsTarefas.forEach(tarefa => { //forEach pra verificar cada tarefa da array todasAsTarefas
    if(!tarefa.classList.contains("checked")){ //condição que verifica se a tarefa NÃO possui a classe checked
      verificacao.push(tarefa) //insere as tarefas desmarcadas na array verificacao
    };
})
  //verificação se alguma tarefa estava desmarcada e foi adicionada no array verificacao
  if(verificacao.length === 0 && todasAsTarefas) { //se a array tiver vazia e existir uma lista de tarefas ele muda o texto do botão pra "Desmarcar"
    botaoMarca.innerText = "Desmarcar todos"  
  } else { //se a array verificacao tiver algum item, ele vai mudar o texto do botao para "Marcar"
    botaoMarca.innerText = "Marcar todos"
    }
} 

// console.log(novaTarefa);
// console.log(botaoAdd);
// console.log(formulario);
// console.log(listaDeTarefas);
// console.log(botaoMarca);
// console.log(botaoLimpa);

/*
DOM - é um objeto criado pelo navegador a partir do HTML
document - tag html
element - todas as demais tags
Attribute - href, src, class, id
text - conteudo de uma tag
*/

//som do botão
botaoAdd.addEventListener('click', () =>{
  const audio = document.querySelector('audio')
  audio.play()
})



