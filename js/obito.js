
/* inserir input */

var hoje = document.getElementById('data');
var nomesFale = document.getElementById('nomesFalec');
var insereData = document.getElementById('dataRegistro');
var livro = document.getElementById('numeroLivro');
var serventi = document.getElementById('serventia');

function insere() {
    var data = hoje.value;
    if (data == '') data = '';
    dataHoje.innerHTML = data;

    var nomesFalec = nomesFale.value;
    if (nomesFalec == '') nomesFalec = '';
    nomes.innerHTML = nomesFalec;

    var dataRegistro = insereData.value;
    if (dataRegistro == '') dataRegistro = '';
    dateManual.innerHTML = dataRegistro;

    var numeroLivro = livro.value;
    if (numeroLivro == '') numeroLivro = '';
    numerosLFT.innerHTML = numeroLivro;

    var serventia = serventi.value;
    if (serventia == 's') serventia = ', nesta serventia';
    cartorio.innerHTML = serventia;
}