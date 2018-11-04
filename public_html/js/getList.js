function getList()
{
    var url = "https://dyj5jc22ce.execute-api.us-west-2.amazonaws.com/prod/money"

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    var lista = xmlHttp.responseText;
    lista = JSON.parse(lista)['rates'];
    var i = 0;
    var despliegue = document.getElementById("despliegue");
    var despliegue2 = document.getElementById("despliegue2");
    var despliegue3 = document.getElementById("despliegue3");
    for (var k in lista) {
        despliegue.options[i] = new Option(k);
        despliegue2.options[i] = new Option(k);
        despliegue3.options[i] = new Option(k);
        i += 1;
    }
    return lista;
}
function getvalues()
{
    var url = "https://dyj5jc22ce.execute-api.us-west-2.amazonaws.com/prod/money"
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    var lista = xmlHttp.responseText;
    lista = JSON.parse(lista)['rates'];
    return lista;
}


