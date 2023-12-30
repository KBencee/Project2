function compareProcessors() {
    const processorSelect1 = document.getElementById("processorSelect1").value;
    const processorSelect2 = document.getElementById("processorSelect2").value;

    const processorProducts = {
        "Intel Core i5-11400F Processzor": {
            price: 48090,
        },
        "AMD Ryzen 5 3600 Processzor": {
            price: 33090,
        },
        "AMD Ryzen 5 5600 Processzor": {
            price: 53590,
        },
        "Intel Core i7-11700F Processzor": {
            price: 76290,
        },
        "Intel Core I9-11900kf 3.5GHz (s1200) Processzor": {
            price: 106390,
        },
    };

    const product1 = processorProducts[processorSelect1];
    const product2 = processorProducts[processorSelect2];

    const price1 = product1.price;
    const price2 = product2.price;

    const productDiv1 = createProcessorDiv(processorSelect1, price1);
    const productDiv2 = createProcessorDiv(processorSelect2, price2);

    document.getElementById("processorProducts").innerHTML = "";
    document.getElementById("processorProducts").appendChild(productDiv1);
    document.getElementById("processorProducts").appendChild(productDiv2);

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

function createProcessorDiv(processor, price) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const heading = document.createElement("h2");
    heading.textContent = processor;

    const pricePara = document.createElement("p");
    pricePara.textContent = `Ár: ${price} Ft`;

    productDiv.appendChild(heading);
    productDiv.appendChild(pricePara);

    return productDiv;
}
