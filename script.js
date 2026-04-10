let p = 0;

function add() {
  p += 10;
  atualizar();
}

function remover() {
  p -= 5;
  atualizar();
}

function atualizar() {
  document.getElementById("pontos").innerText = p;
}