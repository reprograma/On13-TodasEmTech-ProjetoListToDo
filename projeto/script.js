// 1. Capturar as entradas e armazenar essas entradas em variáveis;


/*
window - é tudo, global

# DOM - é um objeto criado pelo navegadora a partir do HTML;

- document - acessando a tag HTML;

- element - qualquer outra tag do HTML (p, ul, div);

- attribute - href, src, class, id, name;

- text - os conteúdos que estão dentro da tag;

*/

// variavel que ela digita no input

// 1. Capturar entradas e armazenar em variáveis

const novaTarefa = document.querySelector('#inputAdd');
const buttonAdd = document.getElementById('buttonAdd');
const formulario = document.getElementsByClassName('formAdd');
const listaTarefas = document.getElementById('listaTarefas');
const buttonMarca = document.getElementById('buttonMarca');
const buttonLimpa = document.getElementById('buttonLimpa');

// 2. Processamentos através de eventos e funções

// função de adicionar a partir do click da usuária, um evento

buttonAdd.addEventListener('click', (event) => {
    event.preventDefault()
    
    const elementoLista = document.createElement('li');
    const textoTarefa = document.createElement('p');
    const iconeDeleta = document.createElement('span');

    textoTarefa.innerText = novaTarefa.value;
    iconeDeleta.innerText = '🗑'

    if(textoTarefa.innerText.trim() === ''){
        alert('Você precisa digitar alguma coisa!')
    } else {
        listaTarefas.appendChild(elementoLista)
        elementoLista.appendChild(textoTarefa)
        elementoLista.appendChild(iconeDeleta)
        formulario.reset()
    }
    novaTarefa.focus()
    
    // função para marcar individualmente uma tarefa;
    textoTarefa.addEventListener('click', () =>{
        textoTarefa.classList.toggle('checked')
    })

    // função para deletar individualmente uma tarefa;

    iconeDeleta.addEventListener('click', () => {
        // elementoLista.removeChild(elementoLista)
        elementoLista.remove();
    })
    
    // função para marcar todas as tarefas

    buttonMarca.addEventListener('click', () => {
        let todasAsTarefas = document.querySelectorAll('p')

        if(buttonMarca.innerText === "Marcar todos"){
            todasAsTarefas.forEach((tarefa) => {
                tarefa.classList.add("checked")
            })
            buttonMarca.innerText = "Desmarcar todos"
        } else {
            todasAsTarefas.forEach((tarefa) => {
                tarefa.classList.remove("checked")
            })
            buttonMarca.innerText = "Marcar todos"
        }
    })

    
    // função para limpar todas as tarefas
    buttonLimpa.addEventListener ('click', () => {
        listaTarefas.innerHTML = '';
    })

})








// console.log(novaTarefa);
// console.log(buttonAdd);
// console.log(formulario);
// console.log(listaTarefas);
// console.log(buttonMarca);
// console.log(buttonLimpa);

