function compareGPUs() {
    const gpuSelect1 = document.getElementById("gpuSelect1").value;
    const gpuSelect2 = document.getElementById("gpuSelect2").value;

    const gpuProducts = {
        "Gigabyte GV-N1060D5-6GD NVIDIA GeForce GTX 1060 6 GB GDDR5": 63999,
        "GIGABYTE GeForce GTX 1660 SUPER D6 6G": 117090,
        "MSI GeForce RTX 4060 GAMING X 8G": 151890,
        "ASUS ROG Strix RX 560 V2 4GB GDDR5 videokártya": 47090,
        "ASUS Dual RTX 3050 8GB GDDR6 videokártya": 103290
    };

    const price1 = gpuProducts[gpuSelect1];
    const price2 = gpuProducts[gpuSelect2];

    const productDiv1 = createGPUDiv(gpuSelect1, price1);
    const productDiv2 = createGPUDiv(gpuSelect2, price2);

    document.getElementById("gpuProducts").innerHTML = "";
    document.getElementById("gpuProducts").appendChild(productDiv1);
    document.getElementById("gpuProducts").appendChild(productDiv2);

    applyColorStyles(productDiv1, productDiv2, price1, price2);
}

function applyColorStyles(div1, div2, price1, price2) {
    div1.style.color = price1 > price2 ? 'red' : 'green';
    div2.style.color = price1 < price2 ? 'red' : 'green';
}

function createGPUDiv(selectedGPU, price) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const heading = document.createElement("h2");
    heading.textContent = selectedGPU;

    const pricePara = document.createElement("p");
    pricePara.textContent = `Ár: ${price} Ft`;

    productDiv.appendChild(heading);
    productDiv.appendChild(pricePara);

    return productDiv;
}

document.getElementById("compareButton").addEventListener("click", compareGPUs);
