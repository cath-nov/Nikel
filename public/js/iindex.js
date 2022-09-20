const nome = "Catherine Novacovski";
let nome2 = "Catherine Novacovski.";
let pessoas = [
    {
        nome: "Cath",
        idade: "27",
        trabalho: "prog"
    },
    {
        nome: "Cati",
        idade: "45",
        trabalho: "vend"
    }
];

let pessoasListaVazia = [];

console.log(nome);
console.log(nome2);

function alterarNome(){
    nome2 = "Catiana Novacovski";
    console.log(nome2);
}

alterarNome();

function recebeEalteraNome(novoNome){
    nome2 = novoNome;
    console.log(nome2);
}

recebeEalteraNome("Maíra Carvalho");

function adicionarPessoa(pessoa){
    pessoas.push(pessoa);
}

console.log(pessoas)

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "50",
    trabalho: "Porteiro"
});

console.log(pessoas)


function imprimirPessoas(){
    pessoas.forEach(item => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);

    });
}

imprimirPessoas();