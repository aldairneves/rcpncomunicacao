
/* inserir input */

var hoje = document.getElementById('data');
var tipo = document.getElementById('tipocas');
var nomesNub = document.getElementById('nomesNubentes');
var insereData = document.getElementById('dataRegistro');
var livro = document.getElementById('numeroLivro');
var serventi = document.getElementById('serventia');
var nubNomealt = document.getElementById('nomeAlterado');

function insere() {
    var data = hoje.value;
    if (data == '') data = '';
    dataHoje.innerHTML = data;

    var tipocas = tipo.value;
    if (tipocas == 'c') tipocas = 'civil';
    if (tipocas == 'r') tipocas = 'religioso com efeito civil';
    if (tipocas == 'u') tipocas = 'de conversão de união estável';
    tipocasamento.innerHTML = tipocas;

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
    if (serventia == 's') serventia = 'nesta serventia';
    if (serventia == 'si') serventia = 'sem informação';
    cartorio.innerHTML = serventia;

    var nomeAlterado = nubNomealt.value;
    if (nomeAlterado == 'n') nomeAlterado = 'não ouvi alteração de nomes';
    if (nomeAlterado == 'si') nomeAlterado = 'sem informação';
    nomeAl.innerHTML = nomeAlterado;
}