function compareStorage() {
    const storageSelect1 = document.getElementById("storageSelect1").value;
    const storageSelect2 = document.getElementById("storageSelect2").value;

    const storageProducts = {
        "Seagate Barracuda ST2000DM008 2 TB 3.5": "21 789Ft",
        "SureFire GX3 Gaming HDD 2TB": "25 290Ft",
        "SureFire GX3 Gaming SSD 1TB": "27 490Ft",
        "Kingston A400 960GB SATA SSD": "20 991Ft",
        "ADATA XPG GAMMIX S11 Pro SSD 1TB": "45 090Ft"
    };

    const price1 = parseInt(storageProducts[storageSelect1].replace(/\s/g, "").replace("Ft", ""), 10);
    const price2 = parseInt(storageProducts[storageSelect2].replace(/\s/g, "").replace("Ft", ""), 10);

    const productDiv1 = createStorageDiv(storageSelect1, price1);
    const productDiv2 = createStorageDiv(storageSelect2, price2);

    document.getElementById("storageProducts").innerHTML = "";
    document.getElementById("storageProducts").appendChild(productDiv1);
    document.getElementById("storageProducts").appendChild(productDiv2);

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

function createStorageDiv(storage, price) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const heading = document.createElement("h2");
    heading.textContent = storage;

    const pricePara = document.createElement("p");
    pricePara.textContent = `Ár: ${price} Ft`;

    productDiv.appendChild(heading);
    productDiv.appendChild(pricePara);

    return productDiv;
}
