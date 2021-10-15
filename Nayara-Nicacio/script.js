const novaTarefa = document.querySelector("#input_id");
const botaoAdd = document.getElementById('botao_add_id');
const formulario = document.getElementById('form_id');
const listaDeTarefas = document.getElementById('lista_id');
const botaoMarca = document.getElementById('botao_marca_id');
const botaoLimpa = document.getElementById('botao_limpa_id');

//função de adicionar a partir do click da usuária, um evento
botaoAdd.addEventListener('click', (event) => {
    event.preventDefault()

    const elementoLista = document.createElement('li')
    const textoTarefa = document.createElement('p')
    const iconeDeleta = document.createElement('span')

    textoTarefa.innerText = novaTarefa.value;
    iconeDeleta.innerText = "🗑️"

    if (textoTarefa.innerText.trim() === '') {
        alert('Você precisa digitar alguma coisa!')
        /* DESAFIO 1
        novaTarefa.classList.add('erro'); //adiciona classe erro ao elemento novaTarefa (input) - a classe está no css
        novaTarefa.addEventListener('animationend', event => { 
        novaTarefa.classList.remove('erro');
        }) */
    } else {
        listaDeTarefas.appendChild(elementoLista)
        elementoLista.appendChild(textoTarefa)
        elementoLista.appendChild(iconeDeleta)
        formulario.reset()
    }
    novaTarefa.focus()

textoTarefa.addEventListener('click', () => {

    if(!textoTarefa.classList.contains('checked')) {
    textoTarefa.classList.remove('checked' )

{
        textoTarefa.classList.toggle('checked')
        verificarMarcados()
    }
}
iconeDeleta.addEventListener('click',()=>{
elementoLista.remove();

})
verificarMarcados();

botaoMarca . addEventListener ( 'click' ,  ( )  =>  {
    let  todasAsTarefas  =  document . querySelectorAll ( 'p' )

    if ( botaoMarca . innerText  ===  "todos MARCAR" )  {
      todasAsTarefas . forEach ( ( tarefa )  =>  {
        tarefa . classList . adicionar ( "verificado" )
      } )
      botaoMarca . innerText  =  "Desmarcar todos"
    }  else  {
      todasAsTarefas . forEach ( ( tarefa )  =>  {
        tarefa . classList . remover ( "verificado" )
      } )
      botaoMarca . innerText  =  "Marcar todos"
    }
  } )
  botaoLimpa . addEventListener ( 'click' ,  ( )  =>  {
    listaDeTarefas . innerHTML  =  '' ;
  } )
  function  verificarMarcados ( )  {
    let  todasAsTarefas  =  document . querySelectorAll ( 'p' )
    let  verificacao  =  [ ]  // array vazia que recebe tarefas que estão desmarcadas (que não possui classe verificada)

    todasAsTarefas . forEach ( tarefa  =>  {  // forEach pra verificar cada tarefa da array todasAsTarefas
      if ( ! tarefa . classList . contains ( " checks " ) ) {  // condição que verifica se a tarefa NÃO possui uma classe verificada
        verificacao . push ( tarefa )  // insere as tarefas desmarcadas na array verificacao
      } 

    } )

    // verificação se alguma tarefa estava desmarcada e foi adicionada no array verificacao
    if ( verificacao . length  ===  0  &&  todasAsTarefas )  {  // se um array tiver vazio e existir uma lista de tarefas ele muda o texto do botão pra "Desmarcar"
      botaoMarca . innerText  =  "Desmarcar todos"  
    }  else  {  // se um array verificacao tiver algum item, ele vai mudar o texto do botao para "Marcar"
      botaoMarca . innerText  =  "Marcar todos"
    }
  } 
})