function showProcessor() {
    const processorSelect = document.getElementById("processorSelect");
    const selectedProcessor = processorSelect.value;

    const processorProducts = {
        "Intel Core i5-11400F Processzor": {
            price: "48 090Ft",
            coresThreads: "6/12",
            baseClock: "2.6GHz (Turbo: 4.4GHz)",
            socket: "LGA1200",
            tdp: "65W",
            cache: "12MB Intel Smart Cache"
        },
        "AMD Ryzen 5 3600 Processzor": {
            price: "33 090Ft",
            coresThreads: "6/12",
            baseClock: "3.6GHz (Turbo: 4.2GHz)",
            socket: "AM4",
            tdp: "65W",
            cache: "35MB Total Cache"
        },
        "AMD Ryzen 5 5600 Processzor": {
            price: "53 590Ft",
            coresThreads: "6/12",
            baseClock: "3.7GHz (Turbo: 4.6GHz)",
            socket: "AM4",
            tdp: "65W",
            cache: "35MB Total Cache"
        },
        "Intel Core i7-11700F Processzor": {
            price: "76 290Ft",
            coresThreads: "8/16",
            baseClock: "2.5GHz (Turbo: 4.9GHz)",
            socket: "LGA1200",
            tdp: "65W",
            cache: "16MB Intel Smart Cache"
        },
        "Intel Core I9-11900kf 3.5GHz (s1200) Processzor": {
            price: "106 390Ft",
            coresThreads: "8/16",
            baseClock: "3.5GHz (Turbo: 5.3GHz)",
            socket: "LGA1200",
            tdp: "125W",
            cache: "16MB Intel Smart Cache"
        }
    };

    const productData = processorProducts[selectedProcessor];
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const heading = document.createElement("h2");
    heading.textContent = selectedProcessor;

    const pricePara = document.createElement("p");
    pricePara.textContent = `Ár: ${productData.price}`;

    const coresThreadsPara = document.createElement("p");
    coresThreadsPara.textContent = `Magok/Szálak: ${productData.coresThreads}`;

    const baseClockPara = document.createElement("p");
    baseClockPara.textContent = `Alapórajel: ${productData.baseClock}`;

    const socketPara = document.createElement("p");
    socketPara.textContent = `Foglalat: ${productData.socket}`;

    const tdpPara = document.createElement("p");
    tdpPara.textContent = `TDP: ${productData.tdp}`;

    const cachePara = document.createElement("p");
    cachePara.textContent = `Cache: ${productData.cache}`;

    productDiv.appendChild(heading);
    productDiv.appendChild(pricePara);
    productDiv.appendChild(coresThreadsPara);
    productDiv.appendChild(baseClockPara);
    productDiv.appendChild(socketPara);
    productDiv.appendChild(tdpPara);
    productDiv.appendChild(cachePara);

    document.getElementById("processorProducts").innerHTML = "";
    document.getElementById("processorProducts").appendChild(productDiv);
}
