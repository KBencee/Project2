function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function onlyOne2(checkbox) {
    var checkboxes = document.getElementsByName('check2')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function onlyOne3(checkbox) {
    var checkboxes = document.getElementsByName('check3')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function onlyOne4(checkbox) {
    var checkboxes = document.getElementsByName('check4')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function onlyOne5(checkbox) {
    var checkboxes = document.getElementsByName('check5')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

let list1=["","","","","",""]

belerak(0)
function belerak(i){
    index = Number(i)
    kiir()
}
function kiir(){
    
 switch(index)
 {
    case 0:
        document.getElementById("cuccok").innerHTML="<p>A Lol egy 5v5 moba játék</p> <br>" + `<p>${list[index]} </p>`
        break;
    case 1:
        document.getElementById("cuccok").innerHTML="<p>5v5 Tactial shooter</p> <br>" + `<p>${list[index]} </p>`
        break;
    case 2:
        document.getElementById("cuccok").innerHTML="<p>Cartony style, looter shooter</p> <br>" + `<p>${list[index]} </p>`
        break;
    case 3:
        document.getElementById("cuccok").innerHTML="<p>Fast paced storygame</p> <br>" + `<p>${list[index]} </p>`
        break;
    case 4:
        document.getElementById("cuccok").innerHTML="<p>kockák</p> <br>" + `<p>${list[index]} </p>`
        break;
 }
}
