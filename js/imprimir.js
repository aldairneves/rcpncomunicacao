/* imprimir etiqueta */
/* document.getElementById('btn').onclick = function () {
    var conteudo = document.getElementById('imprimir').innerHTML,
        tela_impressao = window.open('about:blank');

    tela_impressao.document.write(conteudo);
    tela_impressao.window.print();
    tela_impressao.window.close();
} */

const btn_imp=document.getElementById("btn")

btn_imp.addEventListener("click",(evt)=>{
    const conteudo = document.getElementById("imprimir").innerHTML

    let estilo = "<style>"
    estilo += "p {text-align: justify; font-family: 'Roboto', sans-serif; font-size: 12px;}"
    estilo += "</style>"

    const win = window.open('about:blank');

    win.document.write('<html><head>')
    win.document.write('<title> Etiqueta</title>')
    win.document.write(estilo)
    win.document.write('</head><body>')
    win.document.write(conteudo)
    win.document.write('</body></html>')

    win.print()
    win.close()
})