//1. capturar entradas e armazenar em variáveis

const novaTarefa = document.querySelector("#input_id");
const botaoAdd = document.getElementById("botao_add_id");
const formulario = document.getElementsByClassName("form_add");
const listaDeTarefas = document.getElementById("lista_id");
const botaoMarca = document.getElementById("botao_marca_id");
const botaoLimpa = document.getElementById("botao_limpa_id");


//2. Processamento através de eventos e funções

//função de adicionar a partir do click da usuária, um evento

botaoAdd.addEventListener("click", (event) => {
  event.preventDefault();

  
  const elementoLista = document.createElement("li");
  const textoTarefa = document.createElement("p");
  const iconeDeleta =  document.createElement("span");

  textoTarefa.innerText = novaTarefa.value;
  iconeDeleta.innerText = "🗑"

  if(textoTarefa.innerText.trim() ===""){
    alert("Você precisa digitar algo")
  } else {
    listaDeTarefas.appendChild(elementoLista);
    elementoLista.appendChild(textoTarefa);
    elementoLista.appendChild(iconeDeleta);
    formulario.reset();
  }
  novaTarefa.focus();
})
//função para marcar individualmente uma tarefa

//função para deletar individualmente uma tarefa

//função para marcar todas as tarefas

//função para limpar todas as tarefas