// 1. Capturar entradas e armazenar em variáveis

const novaTarefa = document.querySelector('#input_id')
const botaoAdd = document.getElementById('button_add_id')
const formulario = document.getElementById('form_id')
const listaDeTarefas = document.getElementById('lista_id')
const botaoMarca = document.getElementById('button_marca_id')
const botaoLimpa = document.getElementById('button_limpa_id')

// 2. Processamentos através de eventos e funções


botaoAdd.addEventListener("click", (event) => {
    event.preventDefault();
  
    const elementoLista = document.createElement('li');
    const textoTarefa = document.createElement('p');
    const iconeDeleta = document.createElement('span');
  
    textoTarefa.innerText = novaTarefa.value;
    iconeDeleta.innerText = "🗑"
  
    if(textoTarefa.innerText.trim() === '') {
  
      novaTarefa.classList.add('erro');
      novaTarefa.addEventListener('animationend', (event) => {
        novaTarefa.classList.remove('erro');
      })
    } else {
      listaDeTarefas.appendChild(elementoLista)
      elementoLista.appendChild(textoTarefa)
      elementoLista.appendChild(iconeDeleta)
      formulario.reset(); 
    }
    novaTarefa.focus();
  
    //função de checar
    textoTarefa.addEventListener("click", () => {
      textoTarefa.classList.toggle("checked"); 
      verificarMarcados() 
    });
    
    //função de deletar
    iconeDeleta.addEventListener("click", () => {
      elementoLista.remove(); 
      if(listaDeTarefas.innerHTML === '') {
        
      }
    });
  
    verificarMarcados() 
    
  });
  
  //função de marcar todos
  botaoMarca.addEventListener('click', () => {
    let todasAsTarefas = document.querySelectorAll('p')
  
    if(botaoMarca.innerText === "Marcar todos") {
      todasAsTarefas.forEach(tarefa => {
        tarefa.classList.add("checked");
      });
      botaoMarca.innerText = "Desmarcar todos";
    } else {
      todasAsTarefas.forEach(tarefa => {
        tarefa.classList.remove("checked")
      });
      botaoMarca.innerText = "Marcar todos"
    }
  });
  
  //função de limpar
  botaoLimpa.addEventListener('click', () => {
    listaDeTarefas.innerText = '';
  });
  
  

  
  function verificarMarcados() {
    let todasAsTarefas = document.querySelectorAll('p')
    let verificacao = []
  
    todasAsTarefas.forEach(tarefa => {
      if(!tarefa.classList.contains("checked")){
        verificacao.push(tarefa)
      };
    })
    
    if(verificacao.length === 0 && todasAsTarefas) {
      botaoMarca.innerText = "Desmarcar todos"  
    } else {
      botaoMarca.innerText = "Marcar todos"
    }
  } 
  



