const aluna = new Object();
aluna.nome = "Natália";
aluna.curso = "frontend";

const monitora = {
  nome: "Thiele",
  curso: "frontend",
};

monitora.cidade = "Santa Maria";

console.log(monitora.cidade);

const { nome, cidade } = monitora;
console.log(cidade);

const alunas = Array.of("Julia", "Celina", "Bruna");
const cursos = ["frontend", "backend"];

const alfabeto = "ABCDE";

const arrayAlfabeto = alfabeto.split('');
const arrayPalavras = "oi minha gente".split('');

console.log(arrayPalavras);

function darOi(aluna) {
    console.log("oi " + aluna)
};

darOi("Sâmara");

const frutas = ['maçã', 'banana', 'uva', 'maçã'];
console.log(frutas.length);


