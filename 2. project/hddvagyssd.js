function showStorage() {
    const storageSelect = document.getElementById("storageSelect");
    const selectedStorage = storageSelect.value;

    const storageProducts = {
        "Seagate Barracuda ST2000DM008 2 TB 3.5": {
            price: "21 789Ft",
            capacity: "2TB",
            format: "3.5",
            connection: "SATA 6Gb/s",
            speed: "7200 RPM",
            type: "HDD"
        },
        "SureFire GX3 Gaming HDD 2TB": {
            price: "25 290Ft",
            capacity: "2TB",
            format: "N/A",
            connection: "N/A",
            speed: "N/A",
            type: "HDD"
        },
        "SureFire GX3 Gaming SSD 1TB": {
            price: "27 490Ft",
            capacity: "1TB",
            format: "N/A",
            connection: "N/A",
            speed: "N/A",
            type: "SSD"
        },
        "Kingston A400 960GB SATA SSD": {
            price: "20 991Ft",
            capacity: "960GB",
            format: "2.5",
            connection: "SATA 6Gb/s",
            speed: "Akár 500MB/s írás, 450MB/s olvasás",
            type: "SSD"
        },
        "ADATA XPG GAMMIX S11 Pro SSD 1TB": {
            price: "45 090Ft",
            capacity: "1TB",
            format: "N/A",
            connection: "N/A",
            speed: "Akár 3500MB/s írás, 3000MB/s olvasás",
            type: "SSD"
        }
    };

    const productData = storageProducts[selectedStorage];
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const heading = document.createElement("h2");
    heading.textContent = selectedStorage;

    const pricePara = document.createElement("p");
    pricePara.textContent = `Ár: ${productData.price}`;

    const capacityPara = document.createElement("p");
    capacityPara.textContent = `Tárolókapacitás: ${productData.capacity}`;

    const formatPara = document.createElement("p");
    formatPara.textContent = `Formátum: ${productData.format}`;

    const connectionPara = document.createElement("p");
    connectionPara.textContent = `Csatlakozás: ${productData.connection}`;

    const speedPara = document.createElement("p");
    speedPara.textContent = `Sebesség: ${productData.speed}`;

    const typePara = document.createElement("p");
    typePara.textContent = `Típus: ${productData.type}`;

    productDiv.appendChild(heading);
    productDiv.appendChild(pricePara);
    productDiv.appendChild(capacityPara);
    productDiv.appendChild(formatPara);
    productDiv.appendChild(connectionPara);
    productDiv.appendChild(speedPara);
    productDiv.appendChild(typePara);

    document.getElementById("storageProducts").innerHTML = "";
    document.getElementById("storageProducts").appendChild(productDiv);
}
