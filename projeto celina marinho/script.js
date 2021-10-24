// Capturar as entradas fornecidas pela pessoa usuária e armazenar em variáveis

const novaTarefa = document.querySelector("#input_id");
const botaoAdd = document.getElementById("botao_add_id");
const formulario = document.getElementById("form_id");
const listaDeTarefas = document.getElementById("lista_id");
const botaoMarca = document.getElementById("botao_marca_id");
const botaoLimpa = document.getElementById("botao_limpa_id");


/*console.log(novaTarefa);
console.log(botaoAdd);
console.log(formulario);
console.log(listaDeTarefas);
console.log(botaoMarca);
console.log(botaoLimpa);*/

// Processamento através de eventos e funções (disparam açãoes)

// função de adicionar a partir do click da usuária, um evento
botaoAdd.addEventListener("click", (event)  =>  {
    event.preventDefault( )

    const elementoLista  =  document.createElement('p')
    const textoTarefa  =  document.createElement('p')
    const iconeDeleta  =  document.createElement('span')

    textoTarefa.innerText = novaTarefa.value;
    iconeDeleta.innerText = "🗑"

    if(textoTarefa.innerText.trim() === '') {
        alert('Você precisa digitar alguma tarefa')
    } else{
        listaDeTarefas.appendChild(elementoLista)
        elementoLista.appendChild(textoTarefa)
        elementoLista.appendChild(iconeDeleta)
        formulario.reset()
    }
    novaTarefa.focus()

    // função para marcar individualmente uma tarefa

    textoTarefa.addEventListener('click', () => {
        // if(!textoTarefa.classList.contains('checked')) {
        //   textoTarefa.classList.add('checked')
        // } else {
        //   textoTarefa.classList.remove('checked')
        // }
        textoTarefa.classList.toggle('checked')
    })
        
    // função para deletar individualmente uma terefa
    iconeDeleta.addEventListener('click', () => {
        // elementoLista.removeChild(elementoLista)
        elementoLista.remove();
    })
        
        
})    

verificarMarcados() // chama a função do DESAFIO 2 para mudar o texto do botão quando marcar um item individual, se necessário



// função para marcar todas as tarefas:

// função para limpar todas as tarefas: