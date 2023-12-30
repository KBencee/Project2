function showGPU() {
    const gpuSelect = document.getElementById("gpuSelect");
    const selectedGPU = gpuSelect.value;

    const gpuProducts = {
        "Gigabyte GV-N1060D5-6GD NVIDIA GeForce GTX 1060 6 GB GDDR5": {
            price: "63 999Ft",
            vram: "6GB GDDR5",
            memorySpeed: "8 Gbps",
            connectors: "1x HDMI, 3x DisplayPort, 1x Dual-link DVI-D",
            directXVersion: "12"
        },
        "GIGABYTE GeForce GTX 1660 SUPER D6 6G": {
            price: "117 090Ft",
            vram: "6GB GDDR6",
            memorySpeed: "14 Gbps",
            connectors: "1x HDMI, 3x DisplayPort",
            directXVersion: "12"
        },
        "MSI GeForce RTX 4060 GAMING X 8G": {
            price: "151 890Ft",
            vram: "8GB GDDR6",
            memorySpeed: "N/A",
            connectors: "N/A",
            directXVersion: "N/A"
        },
        "ASUS ROG Strix RX 560 V2 4GB GDDR5 videokártya": {
            price: "47 090Ft",
            vram: "4GB GDDR5",
            memorySpeed: "N/A",
            connectors: "N/A",
            directXVersion: "N/A"
        },
        "ASUS Dual RTX 3050 8GB GDDR6 videokártya": {
            price: "103 290Ft",
            vram: "8GB GDDR6",
            memorySpeed: "N/A",
            connectors: "N/A",
            directXVersion: "N/A"
        }
    };

    const productData = gpuProducts[selectedGPU];
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const heading = document.createElement("h2");
    heading.textContent = selectedGPU;

    const pricePara = document.createElement("p");
    pricePara.textContent = `Ár: ${productData.price}`;

    const vramPara = document.createElement("p");
    vramPara.textContent = `VRAM: ${productData.vram}`;

    const memorySpeedPara = document.createElement("p");
    memorySpeedPara.textContent = `Memória sebessége: ${productData.memorySpeed}`;

    const connectorsPara = document.createElement("p");
    connectorsPara.textContent = `Csatlakozók: ${productData.connectors}`;

    const directXVersionPara = document.createElement("p");
    directXVersionPara.textContent = `DirectX verzió: ${productData.directXVersion}`;

    productDiv.appendChild(heading);
    productDiv.appendChild(pricePara);
    productDiv.appendChild(vramPara);
    productDiv.appendChild(memorySpeedPara);
    productDiv.appendChild(connectorsPara);
    productDiv.appendChild(directXVersionPara);

    document.getElementById("gpuProducts").innerHTML = "";
    document.getElementById("gpuProducts").appendChild(productDiv);
}
