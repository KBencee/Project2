function showMouse() {
    const mouseSelect = document.getElementById("mouseSelect");
    const selectedMouse = mouseSelect.value;

    const mice = {
        "Glorious Model O": {
            price: "18 691Ft",
            design: "Ergonomikus",
            switches: "Omron",
            sensor: "PixArt PMW3360",
            DPI: "Akár 12,000",
            cable: "Braided"
        },
        "Corsair Katar PRO": {
            price: "7 390Ft",
            design: "Ambidextrous",
            switches: "Omron",
            sensor: "PixArt PMW3325",
            DPI: "Akár 10,000",
            cable: "Braided"
        },
        "SteelSeries Rival 3": {
            price: "9690Ft",
            design: "Ergonomikus",
            switches: "SteelSeries mechnikus",
            sensor: "TrueMove Core optikai",
            DPI: "Akár 8,500",
            cable: "Soft rubber"
        },
        "Logitech G502 Hero": {
            price: "18 990Ft",
            design: "Ergonomikus",
            switches: "Logitech HERO",
            sensor: "HERO 25K optikai",
            DPI: "Akár 25,600",
            cable: "Braided"
        },
        "Razer Basilisk V3": {
            price: "20 991Ft",
            design: "Ergonomikus",
            switches: "Razer optikai",
            sensor: "Focus+ optikai",
            DPI: "Akár 26,000",
            cable: "Speedflex"
        }
    };    

    const productData = mice[selectedMouse];
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const heading = document.createElement("h2");
    heading.textContent = selectedMouse;

    const pricePara = document.createElement("p");
    pricePara.textContent = `Ár: ${productData.price}`;

    const designPara = document.createElement("p");
    designPara.textContent = `Kialakítás: ${productData.design}`;

    const switchesPara = document.createElement("p");
    switchesPara.textContent = `Kapcsolók: ${productData.switches}`;

    const sensorPara = document.createElement("p");
    sensorPara.textContent = `Érzékelő: ${productData.sensor}`;

    const dpiPara = document.createElement("p");
    dpiPara.textContent = `DPI: ${productData.DPI}`;

    const cablePara = document.createElement("p");
    cablePara.textContent = `Kábel: ${productData.cable}`;

    productDiv.appendChild(heading);
    productDiv.appendChild(pricePara);
    productDiv.appendChild(designPara);
    productDiv.appendChild(switchesPara);
    productDiv.appendChild(sensorPara);
    productDiv.appendChild(dpiPara);
    productDiv.appendChild(cablePara);

    document.getElementById("mouseProducts").innerHTML = "";
    document.getElementById("mouseProducts").appendChild(productDiv);
}
