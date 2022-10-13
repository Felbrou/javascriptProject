/*let nome = 5;
let idade = 25;
let estaAprovado = true;
let sobrenome = undefined;
const id = 8785666;

let pessoa = {
    nome: 'Rafael',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'de Souza',
    id: 8785666

};

console.log(pessoa);*/


//Arrays

/*let familia = [24, true, 56, 67, 43, 'felipe'];
console.log(familia.length);
console.log(familia[1]);*/

/*let nomeDoColega = ['Luiz Martinelli', 29, 'negao', false, undefined,];
console.log(nomeDoColega.length);*/


//Functions
//Verbo + Substantivo

/*let corSite = "azul";

function resetaCor(cor) {
    corSite = cor;
}

console.log(corSite);
resetaCor("vermelho");
console.log(corSite);*/

//Adiconando maids funcionalidades...tonalidade por exemplo:

/*let corSite = "azul";

function resetaCor(cor, tonalidade) {
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
resetaCor("verde", "claro");
console.log(corSite);*/

/*let cachorro = ["Pitbull", "Grande", "Spike"];

function tipoCachorro(tipo, tamanho, nome) {
    cachorro = [tipo, tamanho, nome]
};

console.log(cachorro);

tipoCachorro("viralata", "Pequeno", "Tom");

console.log(cachorro);*/

//Tipos de Funções

function dizerNome() {
    console.log("Felipe");
}

dizerNome();

function multiplicarPorDois(valor) {
    return valor * 2;
}

//console.log(multiplicarPorDois(10));

let resultado = multiplicarPorDois(3);

console.log(resultado);