            /* 
            DOM - é um objeto criado pelo navegador a partir do HTML
            document - acesso a tag html
            element - me refiro a qualquer outra tag do html
            Attribute - href, src, class, id
            text - conteúdos de uma tag
            */

            // 1. Capturar entradas e armazenar em variáveis

            const novaTarefa = document.querySelector('#input_id'); //como é id, pega pela "#" e se for class pega com um "."
            const botaoAdd = document.getElementById('botao_add_id');
            const formulario = document.getElementById('form_id');
            const listaDeTarefas = document.getElementById('lista_id');
            const botaoMarca = document.getElementById('botao_marca_id');
            const botaoLimpa = document.getElementById('botao_limpa_id');

            // console.log(novaTarefa);
            // console.log(botaoAdd);
            // console.log(formulario);
            // console.log(listaDeTarefas);
            // console.log(botaoMarca);
            // console.log(botaoLimpa);

            // 2. Processamento através de eventos e funções

            // função de adicionar a partir do click da usuária, um evento
            botaoAdd.addEventListener('click', (event) => { //só é obrigado a colocar o () a partir de 2
                event.preventDefault() //Vai cancelar a ação padrão que o evento tem

                const elementoLista = document.createElement('li')
                const textoTarefa = document.createElement('p')
                const iconeDeleta = document.createElement('span')

                textoTarefa.innerText = novaTarefa.value;
                iconeDeleta.innerText = "🗑️"

                if (textoTarefa.innerText.trim() === '') {
                    alert('Você precisa digitar alguma coisa!')
                } else {
                    listaDeTarefas.appendChild(elementoLista)
                    elementoLista.appendChild(textoTarefa)
                    elementoLista.appendChild(iconeDeleta)
                    formulario.reset()
                }
                novaTarefa.focus()

                // função para marcar individualmente uma tarefa
                textoTarefa.addEventListener('click', () => {
                    textoTarefa.classList.toggle('checked')
                })

                // função para deletar individualmente uma tarefa
                iconeDeleta.addEventListener('click', () => {
                    elementoLista.remove() //uma forma de remover o filho tbm: elementoLista.removeChild()
                })

            })

            // função para marcar todas as tarefas:

            botaoMarca.addEventListener('click', () => {
                let todasAsTarefas = document.querySelectorAll('p')

                if (botaoMarca.innerText === "Marcar todos") { //innerTex = conteúdo de texto
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