// MÉTODO: FILTER
//FUNÇÃO: percorre o array e seleciona apenas os itens que atendem a uma condição (retornam true). gera um novo array com um tamanho menor ou igual ao original

console.log("==== EXEMPLO 1 - EXEMPLOS COM FILTER().");

const idades = [12,13,24,15,35,17];
//mantém apenas as idades maiores que 30
const maioresIdade = idades.filter((idade)=>{
    return idade>=18
});
console.log("todas as idades: ",idades);
console.log("apenas maiores de idade: ", maioresIdade);
console.log("/n");

//exemplo 2: (intermediário) filtrar usuários ativos
console.log("==== EXEMPLO 2 - filtrar cadastros ativos ====");

const usuarios = [
    {id:1, nome:"Ana", ativo: true},
    {id:2, nome:"Bruno", ativo: false},
    {id:3, nome:"Carlos", ativo: true},
    {id:4, nome:"Diana", ativo: false}
];
const usuarioAtivos = usuarios.filter((usuario)=> usuario.ativo);
console.log("Usuários ativos no sistemas: ",usuarioAtivos);
console.log("/n");

//exemplo 3: (beck-end real) filtro de produtos em estoque e categoria  
console.log("==== EXEMPLO 3 -  endpoint de vitrine com produtos em estoque (Beck-end real)");

const catalogo = [
  { id: 101, nome: "Teclado Mecânico", categoria: "Periféricos", preco: 250.0, estoque: 12, ativo: true },
  { id: 102, nome: "Mouse Gamer", categoria: "Periféricos", preco: 120.0, estoque: 0, ativo: true },
  { id: 103, nome: "Monitor 144Hz", categoria: "Monitores", preco: 1100.0, estoque: 5, ativo: true },
  { id: 104, nome: "Headset USB", categoria: "Periféricos", preco: 180.0, estoque: 8, ativo: true },
  { id: 105, nome: "Cabo HDMI", categoria: "Acessórios", preco: 30.0, estoque: 0, ativo: false }
];

// Regra de Negócio: Listar somente periféricos que estejam ativos e tenham unidades em estoque
const perifericosDisponiveis = catalogo.filter((item) => {
  return item.categoria === "Periféricos" && item.ativo && item.estoque > 0;
});

console.log("Periféricos Disponíveis para Venda:");
console.log(perifericosDisponiveis);
//fim
