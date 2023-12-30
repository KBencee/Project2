function showSelected() {
    const lapSelect = document.getElementById("lapSelect");
    const selectedLap = lapSelect.value;

    const products = {
        "ASUS TUF Gaming A520M-Plus II Alaplap": {
            price: "31 590 Ft",
            chipset: "AMD A520",
            format: "Micro ATX",
            memorySlots: "4x DDR4 (max. 128GB)",
            pcieSlots: "1x PCIe 3.0 x16, 1x PCIe 3.0 x1",
            connectors: "4x SATA 6Gb/s, 1x M.2, USB 3.2 Gen 1, HDMI, DisplayPort"
        },
        "ASRock H310CM-DVS Alaplap": {
            price: "18 390 Ft",
            chipset: "Intel H310",
            format: "Micro ATX",
            memorySlots: "2x DDR4 (max. 32GB)",
            pcieSlots: "1x PCIe 3.0 x16, 1x PCIe 2.0 x1",
            connectors: "4x SATA3, 1x M.2, USB 3.1 Gen 1, D-Sub, HDMI"
        },
        "GIGABYTE A520 AORUS ELITE Alaplap": {
            price: "37 890 Ft",
            chipset: "AMD A520",
            format: "ATX",
            memorySlots: "4x DDR4 (max. 128GB)",
            pcieSlots: "1x PCIe 3.0 x16, 1x PCIe 3.0 x1",
            connectors: "4x SATA 6Gb/s, 1x M.2, USB 3.2 Gen 1, HDMI"
        },
        "MSI A520M-A PRO Alaplap": {
            price: "23 520 Ft",
            chipset: "AMD A520",
            format: "Micro ATX",
            memorySlots: "2x DDR4 (max. 64GB)",
            pcieSlots: "1x PCIe 3.0 x16, 2x PCIe 3.0 x1",
            connectors: "4x SATA 6Gb/s, 1x M.2, USB 3.2 Gen 1, HDMI, DVI-D"
        },
        "MSI Mpg B550 Gaming Plus Alaplap": {
            price: "52 490 Ft",
            chipset: "AMD B550",
            format: "ATX",
            memorySlots: "4x DDR4 (max. 128GB)",
            pcieSlots: "1x PCIe 4.0 x16, 2x PCIe 3.0 x1",
            connectors: "6x SATA 6Gb/s, 2x M.2, USB 3.2 Gen 2, HDMI, DisplayPort"
        },
    };

    const productData = products[selectedLap];
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const heading = document.createElement("h2");
    heading.textContent = selectedLap;

    const pricePara = document.createElement("p");
    pricePara.textContent = `Ár: ${productData.price}`;

    const chipsetPara = document.createElement("p");
    chipsetPara.textContent = `Chipset: ${productData.chipset}`;

    const formatPara = document.createElement("p");
    formatPara.textContent = `Formátum: ${productData.format}`;

    const memorySlotsPara = document.createElement("p");
    memorySlotsPara.textContent = `Memória foglalatok: ${productData.memorySlots}`;

    const pcieSlotsPara = document.createElement("p");
    pcieSlotsPara.textContent = `PCI foglalatok: ${productData.pcieSlots}`;

    const connectorsPara = document.createElement("p");
    connectorsPara.textContent = `Csatlakozók: ${productData.connectors}`;

    productDiv.appendChild(heading);
    productDiv.appendChild(pricePara);
    productDiv.appendChild(chipsetPara);
    productDiv.appendChild(formatPara);
    productDiv.appendChild(memorySlotsPara);
    productDiv.appendChild(pcieSlotsPara);
    productDiv.appendChild(connectorsPara);

    document.getElementById("products").innerHTML = "";
    document.getElementById("products").appendChild(productDiv);
}
