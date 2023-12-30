function compareKeyboards() {
    const lapSelect1 = document.getElementById("lapSelect1").value;
    const lapSelect2 = document.getElementById("lapSelect2").value;

    const keyboards = {
        "DELUX K9852": {
            price: "4 090Ft",
        },
        "HyperX Alloy Origins Red": {
            price: "36 490Ft",
        },
        "Logitech G213 Prodigy": {
            price: "20 591Ft",
        },
        "Gigabyte AORUS K1": {
            price: "38 285Ft",
        },
        "Ducky ONE 2 Mini MX Silent Red": {
            price: "48 290Ft",
        }
    };

    const product1 = keyboards[lapSelect1];
    const product2 = keyboards[lapSelect2];

    const price1 = Number(product1.price.replace("Ft", "").replace(" ", "").trim());
    const price2 = Number(product2.price.replace("Ft", "").replace(" ", "").trim());

    const productDiv1 = createKeyboardDiv(lapSelect1, price1);
    const productDiv2 = createKeyboardDiv(lapSelect2, price2);

    document.getElementById("keyboardProducts").innerHTML = "";
    document.getElementById("keyboardProducts").appendChild(productDiv1);
    document.getElementById("keyboardProducts").appendChild(productDiv2);

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

function createKeyboardDiv(keyboard, price) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const heading = document.createElement("h2");
    heading.textContent = keyboard;

    const pricePara = document.createElement("p");
    pricePara.textContent = `Ár: ${price} Ft`;

    productDiv.appendChild(heading);
    productDiv.appendChild(pricePara);

    return productDiv;
}
