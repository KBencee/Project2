let list=[31590,18390,37890,23520,52490,"",48090,33090,53590,76290,106390,"",14889,17890,27220,32790,19690,"",63999,117090,151890,47090,103290,"",21789,25290,27490,20991,45090,""]
let pszam = 0
let osszeg = 0
belerak(0)
function belerak(i){
    index = Number(i)
    kiir()
}
function kiir(){

    switch(index)
 {
    case 0:
        document.getElementById("alap").innerHTML=`Választott alaplap: ASUS TUF Gaming A520M-Plus II<br><p>${list[index]}Ft</p>`
        pszam++;
        osszeg+=list[index];
        break;
    case 1:
        document.getElementById("alap").innerHTML="Választott alaplap: ASRock H310CM-DVS<br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 2:
        document.getElementById("alap").innerHTML="Választott alaplap: GIGABYTE A520 AORUS ELITE <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 3:
        document.getElementById("alap").innerHTML="Választott alaplap: MSI A520M-A PRO <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 4:
        document.getElementById("alap").innerHTML="Választott alaplap: MSI Mpg B550 Gaming Plus <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 5:
        document.getElementById("alap").innerHTML="Nem kérek alaplapot <br>" + `<p>${list[index]} </p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 6:
        document.getElementById("procik").innerHTML="Választott processzor: ASUS TUF Gaming A520M-Plus II<br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 7:
        document.getElementById("procik").innerHTML="Választott processzor: ASRock H310CM-DVS <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 8:
        document.getElementById("procik").innerHTML="Választott processzor: GIGABYTE A520 AORUS ELITE <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 9:
        document.getElementById("procik").innerHTML="Választott processzor: MSI A520M-A PRO <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 10:
        document.getElementById("procik").innerHTML="Választott processzor: MSI Mpg B550 Gaming Plus <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 11:
        document.getElementById("procik").innerHTML="Nem kérek processzort <br>" + `<p>${list[index]} </p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 12:
        document.getElementById("memoria").innerHTML="Választott memória: KINGSTON FURY 16GB Beast DDR4 3200MHz CL16 KIT KF432C16BBK2/16<br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 13:
        document.getElementById("memoria").innerHTML="Választott memória: CORSAIR 16GB Vengeance LPX DDR4 3200MHz CL16 CMK16GX4M1E3200C16 <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 14:
        document.getElementById("memoria").innerHTML="Választott memória: HP 8GB /3000 V8 RGB DDR4 RAM <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 15:
        document.getElementById("memoria").innerHTML="Választott memória: Patriot 32GB DDR4 3600MHz Kit(2x16GB) Viper Steel RGB PVSR432G360C8K <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 16:
        document.getElementById("memoria").innerHTML="Választott memória: TEAM GROUP 16GB Delta RGB DDR4 3200MHz CL16 KIT TF4D416G3200HC16CDC01 <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 17:
        document.getElementById("memoria").innerHTML="Nem kérek memóriát <br>" + `<p>${list[index]} </p>`
        osszeg+=list[index];
        pszam++;
        break;  
    case 18:
        document.getElementById("videokartya").innerHTML="Választott videókártya: Gigabyte GV-N1060D5-6GD NVIDIA GeForce GTX 1060 6 GB GDDR5 <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 19:
        document.getElementById("videokartya").innerHTML="Választott videókártya: GIGABYTE GeForce GTX 1660 SUPER D6 6G <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 20:
        document.getElementById("videokartya").innerHTML="Választott videókártya: MSI GeForce RTX 4060 GAMING X 8G <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 21:
        document.getElementById("videokartya").innerHTML="Választott videókártya: ASUS ROG Strix RX 560 V2 4GB GDDR5 <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 22:
        document.getElementById("videokartya").innerHTML="Választott videókártya: ASUS Dual RTX 3050 8GB GDDR6 <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 23:
        document.getElementById("videokartya").innerHTML="Nem kérek videókártyát <br>" + `<p>${list[index]}</p>`
        osszeg+=list[index];
        pszam++;
        break;   
    case 24:
        document.getElementById("hddssd").innerHTML="Választott merevlemez: Seagate Barracuda ST2000DM008 2 TB 3,5 <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 25:
        document.getElementById("hddssd").innerHTML="Választott merevlemez: SureFire GX3 Gaming HDD 2TB <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 26:
        document.getElementById("hddssd").innerHTML="Választott merevlemez: SureFire GX3 Gaming SSD 1TB <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 27:
        document.getElementById("hddssd").innerHTML="Választott merevlemez: Kingston A400 960GB SATA SSD <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 28:
        document.getElementById("hddssd").innerHTML="Választott merevlemez: ADATA XPG GAMMIX S11 Pro SSD 1TB <br>" + `<p>${list[index]}Ft</p>`
        osszeg+=list[index];
        pszam++;
        break;
    case 29:
        document.getElementById("hddssd").innerHTML="Nem kérek merevlemezt <br>" + `<p>${list[index]}</p>`
        osszeg+=list[index];
        pszam++;
        break;  
 }
 document.getElementById("ar").innerHTML="Összeg: " + osszeg + "Ft"
}

function rendel(){
    if(list[index]!=0 && pszam < 5){
        alert("Nem választottál mindenből, ha valamit nem szeretnél megrendelni, akkor kérlek válaszd a nem kérek opciót!")
        return
    }
    else if(pszam < 5){
        alert("Nem választottál mindenből, ha valamit nem szeretnél megrendelni, akkor kérlek válaszd a nem kérek opciót!")
        return
    }
    else{
        alert("Rendelés leadva!")
        return
    }
    
}

/*
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
   */

