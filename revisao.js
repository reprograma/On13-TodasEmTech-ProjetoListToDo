

const aluna = {
    nome: "Ane",
    curso: "Frontend"

}

aluna.cidade = "Salvador"

console.log(aluna.nome)

console.log(aluna.cidade)

// const {nome, cidade}= aluna

// console.log(cidade)

const alunas = new Array('Nat', 'Bruna')
const cursos = ['front', 'back']

const alfabeto = "ABCDE"

const arrayAlfabeto = alfabeto.split('')

console.log(arrayAlfabeto)

const arrayPalavras = "oi minha gente".split('')

console.log(arrayPalavras)

const frutas = ['🍎', '🍇', '🍎', '🍌', '🍎', '🥑']

const encontrarFrutas = frutas.find(elemento => elemento == '🍌')
const FiltrarPor = frutas.filter((elemento) => elemento == '🍎' )
const executarEmTodos = frutas.map((fruta) => fruta = '🍇')

console.log(FiltrarPor)
console.log(executarEmTodos)

const verTodos = frutas.forEach((fruta) => console.log (fruta))

console.log(verTodos)