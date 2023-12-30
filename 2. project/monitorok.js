function showMonitor() {
    const monitorSelect = document.getElementById("monitorSelect");
    const selectedMonitor = monitorSelect.value;

    const monitors = {
        "27-inch Samsung S366C": {
            price: "38 000Ft",
            size: "27-inch",
            resolution: "Full HD (1920x1080)",
            refreshRate: "60Hz",
            displayType: "IPS",
            connectors: "HDMI, DisplayPort"
        },
        "BenQ XL2411P ZOWIE Gaming monitor": {
            price: "67 890Ft",
            size: "24-inch",
            resolution: "Full HD (1920x1080)",
            refreshRate: "144Hz",
            displayType: "TN",
            connectors: "DVI, HDMI, DisplayPort"
        },
        "23.8-inch ASUS TUF Gaming VG249Q1A": {
            price: "65 000Ft",
            size: "23.8-inch",
            resolution: "Full HD (1920x1080)",
            refreshRate: "144Hz",
            displayType: "IPS",
            connectors: "HDMI, DisplayPort"
        },
        "34-inch Samsung Odyssey G5": {
            price: "84 999Ft",
            size: "34-inch",
            resolution: "WQHD (3440x1440)",
            refreshRate: "165Hz",
            displayType: "VA",
            connectors: "HDMI, DisplayPort"
        },
        "29-inch LG UltraWide 29WP500-B": {
            price: "64 900Ft",
            size: "29-inch",
            resolution: "UltraWide Full HD (2560x1080)",
            refreshRate: "75Hz",
            displayType: "IPS",
            connectors: "HDMI, DisplayPort"
        }
    };

    const productData = monitors[selectedMonitor];
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const heading = document.createElement("h2");
    heading.textContent = selectedMonitor;

    const pricePara = document.createElement("p");
    pricePara.textContent = `Ár: ${productData.price}`;

    const sizePara = document.createElement("p");
    sizePara.textContent = `Kijelző mérete: ${productData.size}`;

    const resolutionPara = document.createElement("p");
    resolutionPara.textContent = `Felbontás: ${productData.resolution}`;

    const refreshRatePara = document.createElement("p");
    refreshRatePara.textContent = `Frissítési ráta: ${productData.refreshRate}`;

    const displayTypePara = document.createElement("p");
    displayTypePara.textContent = `Kijelző típusa: ${productData.displayType}`;

    const connectorsPara = document.createElement("p");
    connectorsPara.textContent = `Csatlakozók: ${productData.connectors}`;

    productDiv.appendChild(heading);
    productDiv.appendChild(pricePara);
    productDiv.appendChild(sizePara);
    productDiv.appendChild(resolutionPara);
    productDiv.appendChild(refreshRatePara);
    productDiv.appendChild(displayTypePara);
    productDiv.appendChild(connectorsPara);

    document.getElementById("monitorProducts").innerHTML = "";
    document.getElementById("monitorProducts").appendChild(productDiv);
}
