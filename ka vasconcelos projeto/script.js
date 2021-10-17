// 1.capturar e armazenar entradas em variáveis

const novaTarefa = document.querySelector("#input_id");

const botaoAdd = document.getElementById('botao_add_id');

const formulario = document.getElementById('form_id');

const listaDeTarefas = document.getElementById('lista_id');

const botaoMarca = document.getElementById('botao_marca_id');

const botaoLimpa = document.getElementById('botao_limpa_id');

//console.log(botaoAdd);
// console.log(novaTarefa);
//console.log(formulario);
// console.log(listaDeTarefas);
// console.log(botaoMarca);
// console.log(botaoLimpa);


// 2. Processamentos através de eventos e funções

// Função de add a partir do click da usuária, um evento

botaoAdd.addEventListener('click', (event) => {
    event.preventDefault()

    const elementoLista = document.createElement('li')
    const textoTarefa = document.createElement('p')
    const iconeDeleta = document.createElement('span')

    textoTarefa.innerText = novaTarefa.value;
    iconeDeleta.innerText = "🗑"

    if (textoTarefa.innerText.trim() === '') {
        alert('Digite alguma coisa!')
    } else {
        listaDeTarefas.appendChild(elementoLista)
        elementoLista.appendChild(textoTarefa)
        elementoLista.appendChild(iconeDeleta)
        formulario.reset()
    }
    novaTarefa.focus()

    // Função para marcar individualmente uma tarefa

    textoTarefa.addEventListener('click', () => {
        textoTarefa.classList.toggle('checked')
    })


    // Função para deletar individualmente uma tarefa

    iconeDeleta.addEventListener('click', () => {
        //elementoLista.removeChild(elementoLista)
        elementoLista.remove()
    })
})



// Função para marcar todas as tarefas [botão que marca]

botaoMarca.addEventListener('click', () => {
        let todasAsTarefas = document.querySelectorAll('p')

        if (botaoMarca.innerText === "Marcar todos") {
            todasAsTarefas.forEach((tarefa) => {
                tarefa.classList.add('checked')
            })
            botaoMarca.innerText = "Desmarcar todos"
        } else {
            todasAsTarefas.forEach((tarefa) => {
                tarefa.classList.remove('checked')
            })
            botaoMarca.innerText = "Marcar todos"
        }
    })
    //OBSERVAÇÃO: Quando clico no "Marcar Todos", ele somente marca todos quando clico 2x. Mas não sei o porquê disso... =(


// Função para limpar todas as tarefas [botão que limpa]

botaoLimpa.addEventListener('click', () => {
    listaDeTarefas.innerHTML = '';
})



















































/*DOM = objeto
HTML = document
TAGS = element
ATRIBUTO DAS TAGS = attribute
CONTEÚDO DE UMA TAG = text
 */