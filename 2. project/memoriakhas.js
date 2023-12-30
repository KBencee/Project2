function compareMemories() {
    const memorySelect1 = document.getElementById("memorySelect1").value;
    const memorySelect2 = document.getElementById("memorySelect2").value;

    const memoryProducts = {
        "KINGSTON FURY 16GB Beast DDR4 3200MHz CL16 KIT KF432C16BBK2/16": {
            price: 14889,
        },
        "CORSAIR 16GB Vengeance LPX DDR4 3200MHz CL16 CMK16GX4M1E3200C16": {
            price: 17890,
        },
        "HP 8GB /3000 V8 RGB DDR4 RAM": {
            price: 27220,
        },
        "Patriot 32GB DDR4 3600MHz Kit(2x16GB) Viper Steel RGB PVSR432G360C8K": {
            price: 32790,
        },
        "TEAM GROUP 16GB Delta RGB DDR4 3200MHz CL16 KIT TF4D416G3200HC16CDC01": {
            price: 19690,
        },
    };

    const product1 = memoryProducts[memorySelect1];
    const product2 = memoryProducts[memorySelect2];

    const price1 = product1.price;
    const price2 = product2.price;

    const productDiv1 = createMemoryDiv(memorySelect1, price1);
    const productDiv2 = createMemoryDiv(memorySelect2, price2);

    document.getElementById("memoryProducts").innerHTML = "";
    document.getElementById("memoryProducts").appendChild(productDiv1);
    document.getElementById("memoryProducts").appendChild(productDiv2);

    if (price1 > price2) {
        productDiv1.style.color = "red";
        productDiv2.style.color = "green";
    } else if (price1 < price2) {
        productDiv1.style.color = "green";
        productDiv2.style.color = "red";
    } else {
        productDiv1.style.color = "black";
        productDiv2.style.color = "black";
    }
}

function createMemoryDiv(memory, price) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const heading = document.createElement("h2");
    heading.textContent = memory;

    const pricePara = document.createElement("p");
    pricePara.textContent = `Ár: ${price} Ft`;

    productDiv.appendChild(heading);
    productDiv.appendChild(pricePara);

    return productDiv;
}

document.getElementById("compareButton").addEventListener("click", compareMemories);
