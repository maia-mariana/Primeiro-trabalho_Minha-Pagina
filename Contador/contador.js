let valorAtual = 0;
const btnIncremento = document.querySelector("#btn-mais");
const btnDecremento = document.querySelector("#btn-menos");
const btnReset = document.querySelector("#btn-reset");

btnIncremento.addEventListener("click", () => {
  valorAtual++;
  atualizaValor(valorAtual);
  atualizaMensagem("Valor incrementado com sucesso");
});

btnDecremento.addEventListener("click", () => {
  if (valorAtual > 0) {
    valorAtual--;
    atualizaValor(valorAtual);
    atualizaMensagem("Valor decrementado com sucesso");
  } else {
    atualizaMensagem("If protegeu para não ter valor negativo");
  }
});

btnReset.addEventListener("click", () => {
  valorAtual = 0;
  atualizaValor(valorAtual);
  atualizaMensagem("Valor resetado com sucesso");
});

function atualizaValor(valor) {
  const display = document.querySelector("#valor");
  display.textContent = valor;
}

function atualizaMensagem(texto) {
  const mensagem = document.querySelector("#mensagem");
  mensagem.textContent = texto; 
}
