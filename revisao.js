const aluna = new Object();
aluna.nome = "Priscila";
aluna.curso = "frontend";

const monitora = {
    nome: "Thiele",
    curso: "frontend"
}

monitora.cidade = "Barueri"

// console.log(monitora.cidade);
// console.log(aluna.curso);

// const {nome, cidade} = monitora

// console.log(nome, cidade);


/* Array*/

const alunas = new Array('Julia', 'Priscila', 'Celina')
const cursos = ['frontend', 'backend']

const alfabeto = "ABCDE"
const arrayAlfabeto = alfabeto.split('')

const arrayPalavras = "Oi minha gente".split(' ')

console.log(arrayPalavras);

console.log(arrayAlfabeto);

console.log(alunas.length); //Ele me passa a quantidade de objetos do array

console.log(cursos.length);

