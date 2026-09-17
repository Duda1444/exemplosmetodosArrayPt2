//MAP: FUNÇÃO: percorre o array e transforma cada item , retornando um NOVO array com o mesmo tamanho do original


console.log("==== EXEMPLOS COM MAP ====");

//0.1 - básico, dobrar  valores numéricos
console.log("exemplo 1: dobro de valores");

const numeros = [1,2,3,4,5];
const dobrados = numeros.map((num) => {
    return num * 2;
});

console.log("original:", numeros);
console.log("dobrados:", dobrados);
console.log("/n");

//exemplo 2 (intermediário): extração de propriedades em array de objetos
console.log("==== EXEMPLO 2: EXTRAINDO PROPRIEDADES EM ARRAY DE OBJETOS");

const usuarios = [
    {id:1,nome: "Ana Silva",idade: 22},
    {id:2, nome:"Bruno Costa", idade:17},
    {id:3, nome:"Carlos Souza", idade:30}
];
const apenasNomes = usuarios.map((usuario)=> usuario.nome);

console.log("Lista de nomes: ", apenasNomes);
console.log("/n");

//exemplo 3 (beck-end real): sanitização e formação de DTO para resposta de API
console.log("==== EXEMPLO 3: DTO E SANITIZAÇÃO  DE DADOS DE API (BACK-END REAL) ====");

const produtosBanco = [
    {id:101, nome:"teclado mecânico RGB", preco: 250.0, estoque:15, custoInterno:120.0},
    {id:102, nome:"Mouse gamer 16000 DPI", preco: 120.0, estoque:0, custoInterno:50.0},
    {id:103, nome:"monitor 144hz  IPS", preco:1100.0, estoque: 8, custoInterno:700.0}
];
//regra de beck-end: formatar peço para o cliente e emitir os dados sensíveis (custo interno)
const respostaApiPublica = produtosBanco.map((produto) => {
  return {
    id: produto.id,
    titulo: produto.nome.toUpperCase(),
    precoFormatado: `R$ ${produto.preco.toFixed(2)}`,
    disponivel: produto.estoque > 0
  };
});

console.log("Resposta da API (Sem custo interno):");
console.log(respostaApiPublica);
//fim

//exemplo 3 