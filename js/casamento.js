
/* inserir input */

var hoje = document.getElementById('data');
var nomesNub = document.getElementById('nomesNubentes');
var insereData = document.getElementById('dataRegistro');
var livro = document.getElementById('numeroLivro');
var serventi = document.getElementById('serventia');
var nubNomealt = document.getElementById('nomeAlterado');

function insere() {
    var data = hoje.value;
    if (data == '') data = '';
    dataHoje.innerHTML = data;

    var nomesNubentes = nomesNub.value;
    if (nomesNubentes == '') nomesNubentes = '';
    nomes.innerHTML = nomesNubentes;

    var dataRegistro = insereData.value;
    if (dataRegistro == '') dataRegistro = '';
    dateManual.innerHTML = dataRegistro;

    var numeroLivro = livro.value;
    if (numeroLivro == '') numeroLivro = '';
    numerosLFT.innerHTML = numeroLivro;

    var serventia = serventi.value;
    if (serventia == 's') serventia = 'Desta Serventia';
    if (serventia == 'si') serventia = 'sem informação';
    cartorio.innerHTML = serventia;

    var nomeAlterado = nubNomealt.value;
    if (nomeAlterado == 'n') nomeAlterado = 'Não ouvi alteração de nomes';
    if (nomeAlterado == 'si') nomeAlterado = 'sem informação';
    nomeAl.innerHTML = nomeAlterado;
}