const aluna = new Object()
<<<<<<< HEAD
aluna.nome = "Lilit"
aluna.curso = "frontend"
aluna.cidade = "Recife"


const monitora = {
  nome: "Carol",
  curso: "frontend",
  cidade: "Brasília",
}

console.log(aluna.nome);
console.log(aluna.curso);

console.log(monitora.nome);
console.log(monitora.curso);
=======
aluna.nome = "Nayara"
aluna.curso = "frontend"

//objeto ->  chave: valor

const monitora = {
  nome: "Thiele",
  curso: "frontend"
}

monitora.cidade = "Barueri"

// console.log(monitora.cidade)
// console.log(aluna.curso)

const { nome, cidade } = monitora

// console.log(cidade)
//Arrays -> [0, 1, 2, 3, 4, 5, 6, 7]

const alunas = Array.of('Julia', 'Celina', 'Bruna')
const cursos = ['frontend', 'backend']

const alfabeto = "ABCDE"

const arrayAlfabeto = alfabeto.split('')

const arrayPalavras = "oi minha gente".split('')

// console.log()

// function somar(numero) {
//   return console.log(numero + numero)
// }

// somar(2)

const frutas = ['🍎', '🍇', '🍎', '🍌', '🍎', '🥑']

// console.log(frutas.length) //length é propriedade, trás informações
// métodos possuem (), executam alguma coisa

// callback

const encontrarElemento = frutas.find((elemento) => elemento == '🍌')
const FiltrarPor = frutas.filter((elemento) => elemento == '🍎')
const executarEmTodos = frutas.map((fruta) => fruta = "🍇" )
const verTodos = frutas.forEach((fruta) => console.log(fruta)) 

console.log(verTodos)
console.log(frutas)


// function callbackFind(elemento) {
//   return elemento == "🍎"
// }



// const numeros = [1, 2, 3, 4]

// const nova = numeros.map(numero => numero * 2)

// console.log(nova)


.innerText

document.querySelector()

>>>>>>> 1d4298bc47d0a8702f8ec0d60ef759ed91b76ca5
