console.log("=== ✅ EXEMPLOS COM every() ===\n");

// -------------------------------------------------------------------------
// Exemplo 1 (Básico): Confirmar se todos os números são positivos
// -------------------------------------------------------------------------
console.log("--- Exemplo 1: Todos os números são positivos? (Básico) ---");

const notas = [7.5, 8.0, 9.5, 6.0];

const todasPositivas = notas.every((nota) => nota >= 0);

console.log("Notas:", notas);
console.log("Todas as notas são válidas (>= 0)?", todasPositivas);
console.log("\n");

// -------------------------------------------------------------------------
// Exemplo 2 (Intermediário): Validação de clientes ativos
// -------------------------------------------------------------------------
console.log("--- Exemplo 2: Toda a turma de clientes está ativa? (Intermediário) ---");

const clientes = [
  { id: 1, nome: "Felipe", ativo: true },
  { id: 2, nome: "Camila", ativo: true },
  { id: 3, nome: "Renata", ativo: true }
];

const todosAtivos = clientes.every((cliente) => cliente.ativo);

console.log("Clientes:", clientes.map(c => `${c.nome}: ${c.ativo ? 'Ativo' : 'Inativo'}`));
console.log("Todos estão ativos?", todosAtivos);
console.log("\n");

// -------------------------------------------------------------------------
// Exemplo 3 (Back-End Real): Validação de Checkout no E-commerce
// -------------------------------------------------------------------------
console.log("--- Exemplo 3: Validação de estoque antes de fechar pedido (Back-End Real) ---");

const itensDoPedido = [
  { produto: "Notebook Gamer", qtdComprada: 1, estoqueDisponivel: 4 },
  { produto: "Mousepad Grande", qtdComprada: 2, estoqueDisponivel: 1 } // Estoque insuficiente!
];

function validarDisponibilidadeCheckout(itens) {
  // Regra: cada item precisa ter quantidade comprada <= estoque disponível
  const pedidoValido = itens.every((item) => {
    return item.qtdComprada <= item.estoqueDisponivel;
  });

  if (pedidoValido) {
    return {
      status: 200,
      autorizado: true,
      mensagem: "Pedido autorizado com sucesso!"
    };
  }

  return {
    status: 400,
    autorizado: false,
    mensagem: "Falha no checkout: Um ou mais itens não possuem estoque suficiente."
  };
}

console.log(validarDisponibilidadeCheckout(itensDoPedido));
// /fim
