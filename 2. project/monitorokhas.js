function compareMonitors() {
    const monitorSelect1 = document.getElementById("monitorSelect1").value;
    const monitorSelect2 = document.getElementById("monitorSelect2").value;

    const monitorProducts = {
        "27-inch Samsung S366C": {
            price: "38 000Ft",
        },
        "BenQ XL2411P ZOWIE Gaming monitor": {
            price: "67 890Ft",
        },
        "23.8-inch ASUS TUF Gaming VG249Q1A": {
            price: "65 000Ft",
        },
        "34-inch Samsung Odyssey G5": {
            price: "84 999Ft",
        },
        "29-inch LG UltraWide 29WP500-B": {
            price: "64 900Ft",
        }
    };

    const product1 = monitorProducts[monitorSelect1];
    const product2 = monitorProducts[monitorSelect2];

    const price1 = Number(product1.price.replace("Ft", "").replace(" ", "").trim());
    const price2 = Number(product2.price.replace("Ft", "").replace(" ", "").trim());

    const productDiv1 = createMonitorDiv(monitorSelect1, price1);
    const productDiv2 = createMonitorDiv(monitorSelect2, price2);

    document.getElementById("monitorProducts").innerHTML = "";
    document.getElementById("monitorProducts").appendChild(productDiv1);
    document.getElementById("monitorProducts").appendChild(productDiv2);

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

function createMonitorDiv(monitor, price) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const heading = document.createElement("h2");
    heading.textContent = monitor;

    const pricePara = document.createElement("p");
    pricePara.textContent = `Ár: ${price} Ft`;

    productDiv.appendChild(heading);
    productDiv.appendChild(pricePara);

    return productDiv;
}
