
/* 
window - 
DOM é um objeto criado pelo navegador a partir do HTML
document - html tudo o que esta dentro
element - todas as demais tags
attribute - href, src, class, id, name, content Atributos
text - conteudo de uma tag

*/

// 1. Capturar entradas e armazenar em varáveis

const novaTarefa = document.querySelector('#input_id');
const botaoAdicionar = document.getElementById('botao_add_id');
const formulario = document.getElementById('form_id');
const listaDeTarefas = document.getElementById('lista_id');
const botaoMarca = document.getElementById('botao_marca_id');
const botaoLimpa = document.getElementById('botao_limpa_id');

// console.log(novaTarefa);
// console.log(botaoAdicionar);
// console.log(formulario);
// console.log(listaDeTarefas);
// console.log(botaoMarca);
// console.log(botaoLimpa);

// 2. Processamento através de eventos e funções

//função de adicionar a partir do clique da usuária, um evento

botaoAdicionar.addEventListener('click', (event) => {
    event.preventDefault()

    const elementoLista = document.createElement('li');
    const textoTarefa = document.createElement('p');
    const iconeDeleta = document.createElement('span');


    textoTarefa.innerText = novaTarefa.value
    iconeDeleta.innerHTML = "🗑️"

    if(textoTarefa.innerText.trim() === '') {
        alert('Você precisa digitar alguma coisa..')
    } else {
        listaDeTarefas.appendChild(elementoLista)
        elementoLista.appendChild(textoTarefa)
        elementoLista.appendChild(iconeDeleta)
        formulario.reset()
    }

    novaTarefa.focus()
})
//função para marcar individualmente uma tarefa

textoTarefa.addEventListener('click', () => {
    textoTarefa.classList.toggle('checked');
})

//função para deletar individualmente uma tarefa

iconeDeleta.addEventListener('click', () => {
    elementoLista.remove();
    verificarMarcados()
})

botaoMarca.addEventListener('click', () => {
     let todasAsTarefas = document.querySelectorAll('p')
    if(botaoMarca.innerText === "Marcar todos") {
        todasAsTarefas.forEach( (tarefa) => {
            tarefa.classList.add("ckecked");
        })
        botaoMarca.innerText = "Desmarcar todos"
    }else {
        todasAsTarefas.forEach((tarefa) => {
            tarefa.classList.remove("checked");
        }) 

        botaoMarca.innerText = "Marcar todos"
    }
})

//função para limpar todas as tarefas

botaoLimpa.addEventListener('click', () => {
    listaDeTarefas.innerHTML = ('')
})






