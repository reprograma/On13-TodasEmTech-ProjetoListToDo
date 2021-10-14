//Criando objetos
const aluna = new Object()
aluna.nome = "Nayara"
aluna.curso = "frontend"

//objeto -> chave: valor

const monitora = {
    nome: "Thiele",
    curso: "frontend"
}

monitora.cidade = "Barueri"

// console.log(monitora.cidade)
// console.log(aluna.curso)

const {nome, cidade} = monitora

// console.log(cidade)

//Arrays
const alunas = new Array('Julia', 'Celina', 'Bruna') // pode usar Array.of ao inves de new Array, da no mesmo
const cursos = ['frontend', 'backend']

const alfabeto = "ABCDE"

const arrayAlfabeto = alfabeto.split('') // split é onde quer que quebre a array

const arrayPalavras = "oi minha gente".split(' ')

// console.log(cursos.length)

// console.log(alunas.length)

// function darOi(aluna) {
//     console.log("oi " + aluna)
// }
// darOi("Sâmara")