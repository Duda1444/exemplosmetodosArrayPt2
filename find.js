/* 📌 MÉTODO: find()
 
 * Função: Percorre o array e retorna o PRIMEIRO ELEMENTO que satisfaz
 * Se nenhum for encontrado, retorna undefined.
 
 */

console.log("=== 🎯 EXEMPLOS COM find() ===\n");


// Exemplo 1 (Básico): Primeiro número acima da média

console.log("--- Exemplo 1: Primeira nota aprovada (Básico) ---");

const notas = [4.5, 5.8, 7.5, 9.0, 6.0];

const primeiraNotaAprovada = notas.find((nota) => nota >= 7.0);

console.log("Primeira nota >= 7.0:", primeiraNotaAprovada);
console.log("\n");
