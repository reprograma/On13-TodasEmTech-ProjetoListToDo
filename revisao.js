

//objeto é uma variável que tem um conjunto de variáveis dentro com chave e valor

//crindo objeto
const aluna = new Object();

//criando chave e adicionando valor juntamente
aluna.nome = "Nayara";
aluna.curso ="frontend"

console.log(aluna.curso);
//outra forma de criar Objeto

const monitora = {
  nome: "Thiele",
  curso: "Frontend",
}

//buscando Informações no objeto
console.log(monitora.nome);

//inserindo nova informação para o objeto
monitora.cidade= "Barueri";

//desestruturação de objeto para pegar apenas o que queremos
const {nome} = monitora;
console.log(nome); //nao precisa mais do monitora.nome

//outro exemplo de desestruturação
const { curso, cidade} = monitora;
console.log(cidade);




// ARRAYS (lista)

//criando array
const alunas = new Array("Julia", "Celina", "Bruna");
console.log(alunas.length);

//outra forma de criar array
const cursos = ["frontend", "backend"];
console.log(cursos.length);

//outra forma de criar array
const cidades= Array.of("campos", "macaé");

//outra forma de criar array (a partir de uma String)
const alfabeto ="ABCDE";

//quebrar a string em cada caracter
const arrayAlfabeto =alfabeto.split("");

console.log("Array criado a partir da string alfabeto:", arrayAlfabeto);

//quebra a string a cada espaço
const arrayPalavras = "oi minha gente".split(" ");
console.log(arrayPalavras);

//acessando os valores de um array
console.log(cursos[0]);
console.log(cursos[1]);

//usando metodos de iteração de um array
//o array não tem chave então não podemos acessar tão facilmente, acessamos pelos métodos e loops

const frutas = ["pera","uva","maca","pera", "banana", "pera"]

// **find: encontra o primeiro elemento igual ao que procuramos e retorna;

//callback é uma função que recebe outra como parametro, o find recebe um callback ou seja, outra função como parametro

const encontrarElemento = frutas.find((elemento) => elemento == "maca")

console.log(encontrarElemento);

//https://youtu.be/3rD-rK4bkPA?t=9045

// **filter: filtra a array e encontra todos os elementos iguais ao que procuramos e retorna em um array porém o array original permanece o mesmo.

//também recebe um callback

const filtrarPor = frutas.filter((elemento) => elemento == "pera");

console.log(filtrarPor);


// **map: percorre o array para executrar alguma ação

//não modifica a array original

//define que toda fruta é uva, retorna um outro array
const executarEmTodos= frutas.map((elemento) => elemento = "uva");

console.log("array original: ",frutas);
console.log(executarEmTodos);

//outro exemplo:

const numeros = [1,2,3,4];

//retorna um novo array com o resultado de cada número do array original multiplicado por dois
const nova = numeros.map((numero)=> numero*2);

console.log(nova)

// **foreach: percorre a array e executa uma função sem retornar uma nova array

const verTodos = frutas.forEach((elemento) => console.log(elemento))