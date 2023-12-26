let lista = ['','','','','','']
feladat(0)
function feladat(i){
    index = Number(i)
    kiirat()
}

function ertekeles(){
    lista[index] = document.getElementById("jatekok").value
    document.getElementById("ertekelesek").innerHTML+= "<div class='col-lg-3 col-md-4 ertekelt'>" + "<p>" + lista[index] + "<br>" + document.getElementById("ertekelt").value + "</p>" + "</div>"
}

