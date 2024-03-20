let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

function atualizarSubtotal() {
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = (
    subtotalInfo.valor * subtotalInfo.quantidade
  ).toFixed(2);
}
atualizarSubtotal();

const btnAdd = document.getElementById("btn-adicionar-produto-01");
const inptQtd = document.getElementById("quantidade-produto-01");
const btnSub = document.getElementById("btn-subtrair-produto-01");

function adicionarUm() {
  inptQtd.value = parseInt(inptQtd.value) + 1;
  subtotalInfo.quantidade = parseInt(inptQtd.value);
  // Atualizar o DOM
  atualizarSubtotal();
}
function subtrairUm() {
  if (parseInt(inptQtd.value) > 0) {
    inptQtd.value = parseInt(inptQtd.value) - 1;
    subtotalInfo.quantidade = parseInt(inptQtd.value);
    // Atualizar o DOM
    atualizarSubtotal();
  }
}

//manipular a quantidade no subtotalInfo

btnAdd.addEventListener("click", adicionarUm);
btnSub.addEventListener("click", subtrairUm);
