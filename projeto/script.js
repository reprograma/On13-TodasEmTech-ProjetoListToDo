//1. Captação de entradas e armazenar em variáveis

const novaTarefa = document.querySelector("#input_id");

const botaoAdd = document.getElementById('botao_add_id');

const formulario = document.getElementsByClassName('form_id');

const listaDeTarefas = document.getElementById('lista_id');

const botaoMarca = document.getElementById('botao_marca_id');

const botaoLimpa = document.getElementById('botao_limpa_id');

//2. Processamento através de eventos e funções

//função de adicionar a partir do click do usuuario, um evento
botaoAdd.addEventListener('click', (evento) => {
    evento.preventDefault()

    const elementoLista = document.createElement('li')
    const textoTarefa = document.createElement('p')
    const iconeDeleta = document.createElement('span')

    textoTarefa.innerText = novaTarefa.value;
    iconeDeleta.innerText ="🗑️"

    if(textoTarefa.innerText.trim() === '') {
        alert('Você precisa digitat alguma coisa!')
    } else {
        listaDeTarefas.appendChild(elementoLista)
        elementoLista.appendChild(textoTarefa)
        elementoLista.appendChild(iconeDeleta)
        formulario.reset()
    }
    novaTarefa.focus()

    //função para marcar um tarefa
    textoTarefa.addEventListener('click', () => {
        textoTarefa.classList.toggle('checked')
       })
               
       iconeDeleta.addEventListener('click', () => {
        //elementoLista.removeChild(elementoLista)
       elementoLista.remove();
       })
})


//função para marcar as tarefas 
botaoMarca.addEventListener('click', () => {
    let todasAsTarefas = document.querySelectorAll('p')
    if(botaoMarca.innerText === "Marcar todos") {
     todasAsTarefas.forEach((tarefa) => {
          tarefa.classList.add("checked")
        })
    } else{
     todasAsTarefas.forEach((tarefa) =>{
            tarefa.classList.remove("checked")
        })
     botaoMarca.innerText = "Marcar todos"
    }
})
// função para limpar todas as tarefas
botaoLimpa.addEventListener('click', () => {
    listaDeTarefas.innerHTML = '';
})





/*console.log(novaTarefa);
console.log(botaoAdd);
console.log(formulario);
console.log(listaDeTarefas);
console.log(botaoMarca);
console.log(botaoLimpa);*/
/*
DOM - é um objeto criado pelo navegador a partir do document- HTML
Element - refere a qualquer outra tag do html
Attribute - href, scr, class, id
text - conteudo de uma tag
*/
