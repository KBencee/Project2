function showSelected() {
    const lapSelect = document.getElementById("lapSelect");
    const selectedLap = lapSelect.value;

    const products = {
        "DELUX K9852": {
            price: "4 090Ft",
            design: "Mechanikus",
            switches: "N/A",
            sensor: "N/A",
            other: "N/A"
        },
        "HyperX Alloy Origins Red": {
            price: "36 490Ft",
            design: "Mechanikus",
            switches: "HyperX Red kapcsolók",
            sensor: "N/A",
            other: "N/A"
        },
        "Logitech G213 Prodigy": {
            price: "20 591Ft",
            design: "Membrán",
            switches: "Membrán",
            sensor: "N/A",
            other: "N/A"
        },
        "Gigabyte AORUS K1": {
            price: "38 285Ft",
            design: "Mechanikus",
            switches: "Flaretech optikai kapcsolók",
            sensor: "N/A",
            other: "N/A"
        },
        "Ducky ONE 2 Mini MX Silent Red": {
            price: "48 290Ft",
            design: "Mechanikus",
            switches: "Cherry MX Silent Red kapcsolók",
            sensor: "N/A",
            other: "N/A"
        }
    };

    const productData = products[selectedLap];
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const heading = document.createElement("h2");
    heading.textContent = selectedLap;

    const pricePara = document.createElement("p");
    pricePara.textContent = `Ár: ${productData.price}`;

    const designPara = document.createElement("p");
    designPara.textContent = `Kialakítás: ${productData.design}`;

    const switchesPara = document.createElement("p");
    switchesPara.textContent = `Kapcsolók: ${productData.switches}`;

    const sensorPara = document.createElement("p");
    sensorPara.textContent = `Érzékelő: ${productData.sensor}`;

    const otherPara = document.createElement("p");
    otherPara.textContent = `Egyéb: ${productData.other}`;

    productDiv.appendChild(heading);
    productDiv.appendChild(pricePara);
    productDiv.appendChild(designPara);
    productDiv.appendChild(switchesPara);
    productDiv.appendChild(sensorPara);
    productDiv.appendChild(otherPara);

    document.getElementById("products").innerHTML = "";
    document.getElementById("products").appendChild(productDiv);
}
