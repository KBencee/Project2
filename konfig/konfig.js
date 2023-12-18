let list=["","","","","","","","","","","","","","","","","","","","","",""]

belerak(0)
function belerak(i){
    index = Number(i)
    kiir()
}
function kiir(){
    
}

let parts = {
    "alaplap": [`ASUS TUF Gaming A520M-Plus II<br><p>${list[index]} </p>`, `ASRock H310CM-DVS<br>"<p>${list[index]} </p>`, `GIGABYTE A520 AORUS ELITE <br>"<p>${list[index]} </p>`, `MSI A520M-A PRO <br>"<p>${list[index]} </p>`, `MSI Mpg B550 Gaming Plus <br>"<p>${list[index]} </p>`, `Nem kérek alaplapot <br>"<p>${list[index]} </p>`],
    "processzor": [1,2,3,4,5,6],
    "memoria": [1,2,3,4,5,6],
    "videokartya":[1,2,3,4,5,6],
    "hddssd":[1,2,3,4,5,6]
    
}

function getPart(partType, index){
    document.getElelementById("procik").innerHTML = `Választott ${partType}: ${parts[partType, index]}`
}
//getPart(alaplap, 5)
    
/*
switch(index)
 {
    case 0:
        document.getElementById("procik").innerHTML=`Választott alaplap: ASUS TUF Gaming A520M-Plus II<br><p>${list[index]} </p>`
        break;
    case 1:
        document.getElementById("procik").innerHTML="Választott alaplap: ASRock H310CM-DVS<br>" + `<p>${list[index]} </p>`
        break;
    case 2:
        document.getElementById("procik").innerHTML="Választott alaplap: GIGABYTE A520 AORUS ELITE <br>" + `<p>${list[index]} </p>`
        break;
    case 3:
        document.getElementById("procik").innerHTML="Választott alaplap: MSI A520M-A PRO <br>" + `<p>${list[index]} </p>`
        break;
    case 4:
        document.getElementById("procik").innerHTML="Választott alaplap: MSI Mpg B550 Gaming Plus <br>" + `<p>${list[index]} </p>`
        break;
    case 5:
        document.getElementById("procik").innerHTML="Nem kérek alaplapot <br>" + `<p>${list[index]} </p>`
        break;
    case 6:
        document.getElementById("memoria").innerHTML="Választott processzor: ASUS TUF Gaming A520M-Plus II<br>" + `<p>${list[index]} </p>`
        break;
    case 7:
        document.getElementById("memoria").innerHTML="Választott processzor: ASRock H310CM-DVS <br>" + `<p>${list[index]} </p>`
        break;
    case 8:
        document.getElementById("memoria").innerHTML="Választott processzor: GIGABYTE A520 AORUS ELITE <br>" + `<p>${list[index]} </p>`
        break;
    case 9:
        document.getElementById("memoria").innerHTML="Választott processzor: MSI A520M-A PRO <br>" + `<p>${list[index]} </p>`
        break;
    case 10:
        document.getElementById("memoria").innerHTML="Választott processzor: MSI Mpg B550 Gaming Plus <br>" + `<p>${list[index]} </p>`
        break;
    case 11:
        document.getElementById("memoria").innerHTML="Nem kérek processzort <br>" + `<p>${list[index]} </p>`
        break;    
 }
*/
