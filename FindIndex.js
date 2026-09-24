console.log("=== 📍 EXEMPLOS COM findIndex() ===\n");

// -----------------------------------------------------------------------------
// Exemplo 1 (Básico): Posição de um valor primitivo
// -----------------------------------------------------------------------------
console.log("--- Exemplo 1: Posição do primeiro maior de idade (Básico) ---");

const idades =[12,15,17,20,25];

const indiceMaiorDeIdade = idades.findIndex((idade) => idade >= 18);

console.log("Idades:", idades);
console.log(`Primeiro maior de idade está no índice: ${indiceMaiorDeIdade} (Valor: ${idades[indiceMaiorDeIdade]})`);
console.log("\n");

// -----------------------------------------------------------------------------
// Exemplo 2 (intermediário): localizar posição do usuário por id
// -----------------------------------------------------------------------------

console.log("--- LOCALIZAR USUÁRIO POR ID ---");

const usuarios = [
    {id: 10, nome:Carla},
    {id: 25, nome:Diego},
    {id: 32, nome: Fernanda}
];
const indiceDiego = usuarios.findIndex((u) => u.id === 25);

console.log("Índice do usuário com o id 25: ", indiceDiego);
console.log("elemneto encontrado na posição:", usuarios[indiceDiego]);
console.log("/n");


// -----------------------------------------------------------------------------
// Exemplo 3 (back-end real): exclusão da rota delete /produtos/: id com splice()
// -----------------------------------------------------------------------------

console.log("--- Exemplo 3: remover item do banco simulado (beck-end real) ---");

const estoque = [
    {id: 101, nome: "teclado", preco: 150},
    {id: 102, nome: "Mouse", preco: 80},
    {id: 103, nome: "Mousepad", preco: 40}
];

function deletarProdutoporId (id) {
    const index = estoque.findIndex((item) => item.id === id); 

    if (index === -1) {
        return {status: 404, mensagem: "produto não localizado para exclusão"}; 
    }
    
    // Remove exatamente 1 elemento na posição encontrada
    const [removido] = estoque.splice(index, 1);
    
    return {
        status: 200,
        mensagem: `produto ${removido.nome} removido com sucesso!`, 
        estoqueAtualizado: estoque
    };
}

console.log(deletarProdutoporId(102));



