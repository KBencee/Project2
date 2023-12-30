function compareMice() {
    const mouseSelect1 = document.getElementById("mouseSelect1").value;
    const mouseSelect2 = document.getElementById("mouseSelect2").value;

    const mice = {
        "Glorious Model O": {
            price: "18 691Ft",
        },
        "Corsair Katar PRO": {
            price: "7 390Ft",
        },
        "SteelSeries Rival 3": {
            price: "9690Ft",
        },
        "Logitech G502 Hero": {
            price: "18 990Ft",
        },
        "Razer Basilisk V3": {
            price: "20 991Ft",
        }
    };

    const product1 = mice[mouseSelect1];
    const product2 = mice[mouseSelect2];

    const price1 = Number(product1.price.replace("Ft", "").replace(" ", "").trim());
    const price2 = Number(product2.price.replace("Ft", "").replace(" ", "").trim());

    const productDiv1 = createMouseDiv(mouseSelect1, price1);
    const productDiv2 = createMouseDiv(mouseSelect2, price2);

    document.getElementById("mouseProducts").innerHTML = "";
    document.getElementById("mouseProducts").appendChild(productDiv1);
    document.getElementById("mouseProducts").appendChild(productDiv2);

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

function createMouseDiv(mouse, price) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const heading = document.createElement("h2");
    heading.textContent = mouse;

    const pricePara = document.createElement("p");
    pricePara.textContent = `Ár: ${price} Ft`;

    productDiv.appendChild(heading);
    productDiv.appendChild(pricePara);

    return productDiv;
}
