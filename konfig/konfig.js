let list=[31590,18390,37890,23520,52490,0,48090,33090,53590,76290,106390,0,14889,17890,27220,32790,19690,0,63999,117090,151890,47090,103290,0,21789,25290,27490,20991,45090,0,38000,67890,65000,84999,64900,0,18691,7390,9690,18990,20991,0,4090,36490,20591,38285,48290,0]
let pszam1 = 0; pszam2 = 0; pszam3=0; pszam4 = 0; pszam5=0; pszam6=0; pszam7=0; pszam8=0;
let osszeg1 = 0; osszeg2 = 0; osszeg3 = 0; osszeg4 = 0; osszeg5 = 0; osszeg6 = 0; osszeg7 = 0; osszeg8 = 0;

let ertekelesek=[0,0,0,0,0,0]
let aktualis=-1;

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
        pszam1++;
        osszeg1=list[index];
        break;
    case 1:
        document.getElementById("alap").innerHTML="Választott alaplap: ASRock H310CM-DVS<br>" + `<p>${list[index]}Ft</p>`
        osszeg1=list[index];
        pszam1++;
        break;
    case 2:
        document.getElementById("alap").innerHTML="Választott alaplap: GIGABYTE A520 AORUS ELITE <br>" + `<p>${list[index]}Ft</p>`
        osszeg1=list[index];
        pszam1++;
        break;
    case 3:
        document.getElementById("alap").innerHTML="Választott alaplap: MSI A520M-A PRO <br>" + `<p>${list[index]}Ft</p>`
        osszeg1=list[index];
        pszam1++;
        break;
    case 4:
        document.getElementById("alap").innerHTML="Választott alaplap: MSI Mpg B550 Gaming Plus <br>" + `<p>${list[index]}Ft</p>`
        osszeg1=list[index];
        pszam1++;
        break;
    case 5:
        document.getElementById("alap").innerHTML="Nem kérek alaplapot <br>"
        osszeg1=list[index];
        pszam1++;
        break;
    case 6:
        document.getElementById("procik").innerHTML="Választott processzor: ASUS TUF Gaming A520M-Plus II<br>" + `<p>${list[index]}Ft</p>`
        osszeg2=list[index];
        pszam2++;
        break;
    case 7:
        document.getElementById("procik").innerHTML="Választott processzor: ASRock H310CM-DVS <br>" + `<p>${list[index]}Ft</p>`
        osszeg2=list[index];
        pszam2++;
        break;
    case 8:
        document.getElementById("procik").innerHTML="Választott processzor: GIGABYTE A520 AORUS ELITE <br>" + `<p>${list[index]}Ft</p>`
        osszeg2=list[index];
        pszam2++;
        break;
    case 9:
        document.getElementById("procik").innerHTML="Választott processzor: MSI A520M-A PRO <br>" + `<p>${list[index]}Ft</p>`
        osszeg2=list[index];
        pszam2++;
        break;
    case 10:
        document.getElementById("procik").innerHTML="Választott processzor: MSI Mpg B550 Gaming Plus <br>" + `<p>${list[index]}Ft</p>`
        osszeg2=list[index];
        pszam2++;
        break;
    case 11:
        document.getElementById("procik").innerHTML="Nem kérek processzort <br>"
        osszeg2=list[index];
        pszam2++;
        break;
    case 12:
        document.getElementById("memoria").innerHTML="Választott memória: KINGSTON FURY 16GB Beast DDR4 3200MHz CL16 KIT KF432C16BBK2/16<br>" + `<p>${list[index]}Ft</p>`
        osszeg3=list[index];
        pszam3++;
        break;
    case 13:
        document.getElementById("memoria").innerHTML="Választott memória: CORSAIR 16GB Vengeance LPX DDR4 3200MHz CL16 CMK16GX4M1E3200C16 <br>" + `<p>${list[index]}Ft</p>`
        osszeg3=list[index];
        pszam3++;
        break;
    case 14:
        document.getElementById("memoria").innerHTML="Választott memória: HP 8GB /3000 V8 RGB DDR4 RAM <br>" + `<p>${list[index]}Ft</p>`
        osszeg3=list[index];
        pszam3++;
        break;
    case 15:
        document.getElementById("memoria").innerHTML="Választott memória: Patriot 32GB DDR4 3600MHz Kit(2x16GB) Viper Steel RGB PVSR432G360C8K <br>" + `<p>${list[index]}Ft</p>`
        osszeg3=list[index];
        pszam3++;
        break;
    case 16:
        document.getElementById("memoria").innerHTML="Választott memória: TEAM GROUP 16GB Delta RGB DDR4 3200MHz CL16 KIT TF4D416G3200HC16CDC01 <br>" + `<p>${list[index]}Ft</p>`
        osszeg3=list[index];
        pszam3++;
        break;
    case 17:
        document.getElementById("memoria").innerHTML="Nem kérek memóriát <br>"
        osszeg3=list[index];
        pszam3++;
        break;  
    case 18:
        document.getElementById("videokartya").innerHTML="Választott videókártya: Gigabyte GV-N1060D5-6GD NVIDIA GeForce GTX 1060 6 GB GDDR5 <br>" + `<p>${list[index]}Ft</p>`
        osszeg4=list[index];
        pszam4++;
        break;
    case 19:
        document.getElementById("videokartya").innerHTML="Választott videókártya: GIGABYTE GeForce GTX 1660 SUPER D6 6G <br>" + `<p>${list[index]}Ft</p>`
        osszeg4=list[index];
        pszam4++;
        break;
    case 20:
        document.getElementById("videokartya").innerHTML="Választott videókártya: MSI GeForce RTX 4060 GAMING X 8G <br>" + `<p>${list[index]}Ft</p>`
        osszeg4=list[index];
        pszam4++;
        break;
    case 21:
        document.getElementById("videokartya").innerHTML="Választott videókártya: ASUS ROG Strix RX 560 V2 4GB GDDR5 <br>" + `<p>${list[index]}Ft</p>`
        osszeg4=list[index];
        pszam4++;
        break;
    case 22:
        document.getElementById("videokartya").innerHTML="Választott videókártya: ASUS Dual RTX 3050 8GB GDDR6 <br>" + `<p>${list[index]}Ft</p>`
        osszeg4=list[index];
        pszam4++;
        break;
    case 23:
        document.getElementById("videokartya").innerHTML="Nem kérek videókártyát <br>"
        osszeg4=list[index];
        pszam4++;
        break;   
    case 24:
        document.getElementById("hddssd").innerHTML="Választott merevlemez: Seagate Barracuda ST2000DM008 2 TB 3,5 <br>" + `<p>${list[index]}Ft</p>`
        osszeg5=list[index];
        pszam5++;
        break;
    case 25:
        document.getElementById("hddssd").innerHTML="Választott merevlemez: SureFire GX3 Gaming HDD 2TB <br>" + `<p>${list[index]}Ft</p>`
        osszeg5=list[index];
        pszam5++;
        break;
    case 26:
        document.getElementById("hddssd").innerHTML="Választott merevlemez: SureFire GX3 Gaming SSD 1TB <br>" + `<p>${list[index]}Ft</p>`
        osszeg5=list[index];
        pszam5++;
        break;
    case 27:
        document.getElementById("hddssd").innerHTML="Választott merevlemez: Kingston A400 960GB SATA SSD <br>" + `<p>${list[index]}Ft</p>`
        osszeg5=list[index];
        pszam5++;
        break;
    case 28:
        document.getElementById("hddssd").innerHTML="Választott merevlemez: ADATA XPG GAMMIX S11 Pro SSD 1TB <br>" + `<p>${list[index]}Ft</p>`
        osszeg5=list[index];
        pszam5++;
        break;
    case 29:
        document.getElementById("hddssd").innerHTML="Nem kérek merevlemezt <br>"
        osszeg5=list[index];
        pszam5++;
        break; 
    case 30:
        document.getElementById("mon").innerHTML="Választott monitor: Samsung S366C<br>" + `<p>${list[index]}Ft</p>`
        osszeg6=list[index];
        pszam6++;
        break;
    case 31:
        document.getElementById("mon").innerHTML="Választott monitor: BenQ XL2411P ZOWIE Gaming monitor, Full HD, 1ms, 144Hz, DVI, HDMI, DP, Fekete<br>" + `<p>${list[index]}Ft</p>`
        osszeg6=list[index];
        pszam6++;
        break;
    case 32:
        document.getElementById("mon").innerHTML="Választott monitor: ASUS TUF Gaming VG249Q1A<br>" + `<p>${list[index]}Ft</p>`
        osszeg6=list[index];
        pszam6++;
        break;
    case 33:
        document.getElementById("mon").innerHTML="Választott monitor: Samsung Odyssey G5<br>" + `<p>${list[index]}Ft</p>`
        osszeg6=list[index];
        pszam6++;
        break;
    case 34:
        document.getElementById("mon").innerHTML="Választott monitor: LG UltraWide 29WP500-B<br>" + `<p>${list[index]}Ft</p>`
        osszeg6=list[index];
        pszam6++;
        break;
    case 35:
        document.getElementById("mon").innerHTML="Nem kérek monitort <br>"
        osszeg6=list[index];
        pszam6++;
        break; 
    case 36:
        document.getElementById("eg").innerHTML="Választott egér: Glorious Model O<br>" + `<p>${list[index]}Ft</p>`
        osszeg7=list[index];
        pszam7++;
        break;
    case 37:
        document.getElementById("eg").innerHTML="Választott egér: Corsair Katar PRO<br>" + `<p>${list[index]}Ft</p>`
        osszeg7=list[index];
        pszam7++;
        break;
    case 38:
        document.getElementById("eg").innerHTML="Választott egér: SteelSeries Rival 3<br>" + `<p>${list[index]}Ft</p>`
        osszeg7=list[index];
        pszam7++;
        break;
    case 39:
        document.getElementById("eg").innerHTML="Választott egér: Logitech G502 Hero<br>" + `<p>${list[index]}Ft</p>`
        osszeg7=list[index];
        pszam7++;
        break;
    case 40:
        document.getElementById("eg").innerHTML="Választott egér: Razer Basilisk V3<br>" + `<p>${list[index]}Ft</p>`
        osszeg7=list[index];
        pszam7++;
        break;
    case 41:
        document.getElementById("eg").innerHTML="Nem kérek egeret <br>"
        osszeg7=list[index];
        pszam7++;
        break; 
    case 42:
        document.getElementById("bill").innerHTML="Választott billentyűzet: DELUX K9852<br>" + `<p>${list[index]}Ft</p>`
        osszeg8=list[index];
        pszam8++;
        break;
    case 43:
        document.getElementById("bill").innerHTML="Választott billentyűzet: HyperX Alloy Origins Red<br>" + `<p>${list[index]}Ft</p>`
        osszeg8=list[index];
        pszam8++;
        break;
    case 44:
        document.getElementById("bill").innerHTML="Választott billentyűzet: Logitech G213 Prodigy<br>" + `<p>${list[index]}Ft</p>`
        osszeg8=list[index];
        pszam8++;
        break;
    case 45:
        document.getElementById("bill").innerHTML="Választott billentyűzet: Gigabyte AORUS K1<br>" + `<p>${list[index]}Ft</p>`
        osszeg8=list[index];
        pszam8++;
        break;
    case 46:
        document.getElementById("bill").innerHTML="Választott billentyűzet: Ducky ONE 2 Mini MX Silent Red<br>" + `<p>${list[index]}Ft</p>`
        osszeg8=list[index];
        pszam8++;
        break;
    case 47:
        document.getElementById("bill").innerHTML="Nem kérek billentyűzetet <br>"
        osszeg8=list[index];
        pszam8++;
        break; 
 }
 osszeg = osszeg1+osszeg2+osszeg3+osszeg4+osszeg5+osszeg6+osszeg7+osszeg8;
 document.getElementById("ar").innerHTML="Összeg: " + osszeg + "Ft"
}

function rendel(){
    if(pszam1 == 0 || pszam2 == 0 || pszam3 ==0 || pszam4 ==0 || pszam5==0 || pszam6==0 || pszam7 == 0 || pszam8 ==0){
        alert("Nem választottál mindenből, ha valamit nem szeretnél megrendelni, akkor kérlek válaszd a nem szeretnék opciót!")
        return
    }
    else{
        alert("Rendelés leadva!")
        return
    }
    
}

function Ertekeles() {
    y = Number(document.getElementById("star").value)
    CsillagKiir(y)
    ertekelesek[aktualis]=y;
}

function CsillagKiir(x)
{
    document.getElementById("csillag").innerHTML=""
    z = '*'
    for (let i=0;i<x;i++)
    {   
        document.getElementById("csillag").innerHTML += z
    }
    document.getElementById("csillag").innerHTML += "<br>" + "Indoklás: " + document.getElementById("ertekelt").value
}