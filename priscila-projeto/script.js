// 1- Capturar entradas e armazenar em variáveis

const formulario = document.getElementById("form-id");
const novaTarefa = document.querySelector("#input-id");
const botaoAdd = document.getElementById("button-id");
const listaDeTarefas = document.getElementById("lista-id");
const botaoMarca = document.getElementById("botao-marca-id");
const botaoLimpa = document.getElementById("botao-limpa-id");

// 2- Processamentos através de eventos e funções

// Função de adicionar a partir do click da usuária, um evento
botaoAdd.addEventListener("click", (event) => {
  event.preventDefault();

  const elementoLista = document.createElement("li");
  const textoTarefa = document.createElement("p");
  const iconeDeleta = document.createElement("span");

  textoTarefa.innerText = novaTarefa.value;
  iconeDeleta.innerText = "🗑";

  if (textoTarefa.innerText.trim() === "") {
    alert("Você precisa digitar uma tarefa!");
  } else {
    listaDeTarefas.appendChild(elementoLista);
    elementoLista.appendChild(textoTarefa);
    elementoLista.appendChild(iconeDeleta);
    formulario.reset();
  }
  novaTarefa.focus();

  // Função para marcar individualmente uma tarefa
  textoTarefa.addEventListener("click", () => {
    textoTarefa.classList.toggle("checked");
    verificarMarcados();
  });

  // Função pra deletar individualmente uma tarefa
  iconeDeleta.addEventListener("click", () => {
    // elementoLista.removeChild(elementoLista)
    elementoLista.remove();
  });
  verificarMarcados();
});

// Função para marcar todas as tarefas
botaoMarca.addEventListener("click", () => {
  let todasAsTarefas = document.querySelectorAll("p");

  if (botaoMarca.innerText === "Marcar todos") {
    todasAsTarefas.forEach((tarefa) => {
      tarefa.classList.add("checked");
    });
    botaoMarca.innerText = "Desmarcar todos";
  } else {
    todasAsTarefas.forEach((tarefa) => {
      tarefa.classList.remove("checked");
    });
    botaoMarca.innerText = "Marcar todos";
  }
});

// Função ára limpar todas as tarefas
botaoLimpa.addEventListener("click", () => {
  listaDeTarefas.innerHTML = "";
});

// função que verifica se se todos estão marcados

function verificarMarcados() {
  let todasAsTarefas = document.querySelectorAll("p");
  let verificacao = []; //array vazia que recebe as tarefas que estão desmarcadas (que não possui classe checked)

  todasAsTarefas.forEach((tarefa) => {
    //forEach pra verificar cada tarefa da array todasAsTarefas
    if (!tarefa.classList.contains("checked")) {
      //condição que verifica se a tarefa NÃO possui a classe checked
      verificacao.push(tarefa); //insere as tarefas desmarcadas na array verificacao
    }
  });

  //verificação se alguma tarefa estava desmarcada e foi adicionada no array verificacao
  if (verificacao.length === 0 && todasAsTarefas) {
    //se a array tiver vazia e existir uma lista de tarefas ele muda o texto do botão pra "Desmarcar"
    botaoMarca.innerText = "Desmarcar todos";
  } else {
    //se a array verificacao tiver algum item, ele vai mudar o texto do botao para "Marcar"
    botaoMarca.innerText = "Marcar todos";
  }
}

// console.log(formulario);
// console.log(novaTarefa);
// console.log(botaoAdd);
// console.log(listaDeTarefas);
// console.log(botaoMarca);
// console.log(botaoLimpa);
