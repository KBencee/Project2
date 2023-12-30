function showMemory() {
    const memorySelect = document.getElementById("memorySelect");
    const selectedMemory = memorySelect.value;

    const memoryProducts = {
        "KINGSTON FURY 16GB Beast DDR4 3200MHz CL16 KIT KF432C16BBK2/16": {
            price: "14 889Ft",
            capacity: "16GB (2x8GB)",
            speed: "3200MHz",
            casLatency: "CL16",
            design: "RGB LED",
            memoryType: "DDR4"
        },
        "CORSAIR 16GB Vengeance LPX DDR4 3200MHz CL16 CMK16GX4M1E3200C16": {
            price: "17 890Ft",
            capacity: "16GB",
            speed: "3200MHz",
            casLatency: "CL16",
            design: "Nincs RGB",
            memoryType: "DDR4"
        },
        "HP 8GB /3000 V8 RGB DDR4 RAM": {
            price: "27 220Ft",
            capacity: "8GB",
            speed: "3000MHz",
            casLatency: "N/A",
            design: "RGB LED",
            memoryType: "DDR4"
        },
        "Patriot 32GB DDR4 3600MHz Kit(2x16GB) Viper Steel RGB PVSR432G360C8K": {
            price: "32 790Ft",
            capacity: "32GB (2x16GB)",
            speed: "3600MHz",
            casLatency: "CL8",
            design: "RGB LED",
            memoryType: "DDR4"
        },
        "TEAM GROUP 16GB Delta RGB DDR4 3200MHz CL16 KIT TF4D416G3200HC16CDC01": {
            price: "19 690Ft",
            capacity: "16GB (2x8GB)",
            speed: "3200MHz",
            casLatency: "CL16",
            design: "RGB LED",
            memoryType: "DDR4"
        }
    };

    const productData = memoryProducts[selectedMemory];
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const heading = document.createElement("h2");
    heading.textContent = selectedMemory;

    const pricePara = document.createElement("p");
    pricePara.textContent = `Ár: ${productData.price}`;

    const capacityPara = document.createElement("p");
    capacityPara.textContent = `Kapacitás: ${productData.capacity}`;

    const speedPara = document.createElement("p");
    speedPara.textContent = `Sebesség: ${productData.speed}`;

    const casLatencyPara = document.createElement("p");
    casLatencyPara.textContent = `CAS Latency: ${productData.casLatency}`;

    const designPara = document.createElement("p");
    designPara.textContent = `Kialakítás: ${productData.design}`;

    const memoryTypePara = document.createElement("p");
    memoryTypePara.textContent = `Memória típusa: ${productData.memoryType}`;

    productDiv.appendChild(heading);
    productDiv.appendChild(pricePara);
    productDiv.appendChild(capacityPara);
    productDiv.appendChild(speedPara);
    productDiv.appendChild(casLatencyPara);
    productDiv.appendChild(designPara);
    productDiv.appendChild(memoryTypePara);

    document.getElementById("memoryProducts").innerHTML = "";
    document.getElementById("memoryProducts").appendChild(productDiv);
}
