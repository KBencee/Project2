const products = {
    "ASUS TUF Gaming A520M-Plus II Alaplap": {
        price: 31590,
    },
    "ASRock H310CM-DVS Alaplap": {
        price: 18390,
    },
    "GIGABYTE A520 AORUS ELITE Alaplap": {
        price: 37890,
    },
    "MSI A520M-A PRO Alaplap": {
        price: 23520,
    },
    "MSI Mpg B550 Gaming Plus Alaplap": {
        price: 52490,
    },
};

function compareProducts() {
    const lapSelect1 = document.getElementById("lapSelect1").value;
    const lapSelect2 = document.getElementById("lapSelect2").value;

    const product1 = products[lapSelect1];
    const product2 = products[lapSelect2];

    const price1 = product1.price;
    const price2 = product2.price;

    const productDiv1 = createProductDiv(product1, price1);
    const productDiv2 = createProductDiv(product2, price2);

    document.getElementById("products").innerHTML = "";
    document.getElementById("products").appendChild(productDiv1);
    document.getElementById("products").appendChild(productDiv2);

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

function createProductDiv(product, price) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const heading = document.createElement("h2");
    heading.textContent = Object.keys(products).find(key => products[key] === product);

    const pricePara = document.createElement("p");
    pricePara.textContent = `Ár: ${price} Ft`;

    productDiv.appendChild(heading);
    productDiv.appendChild(pricePara);

    return productDiv;
}

const lapSelect1 = document.getElementById("lapSelect1");
const lapSelect2 = document.getElementById("lapSelect2");

for (const product in products) {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");

    option1.text = product;
    option1.value = product;

    option2.text = product;
    option2.value = product;

    lapSelect1.appendChild(option1);
    lapSelect2.appendChild(option2);
}
