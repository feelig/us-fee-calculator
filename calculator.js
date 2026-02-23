/* js/calculator.js - 终极版 (支持 Texas 和 Florida) */

// ===== 德克萨斯州 (Texas) 计算逻辑 =====
function calculateVehicleFee() {
    let fee = parseFloat(document.getElementById("vehicleType").value);
    let resultDiv = document.getElementById("result");
    if (isNaN(fee)) return;
    resultDiv.innerHTML = "Estimated Total Fee: $" + fee.toFixed(2);
    resultDiv.style.display = "block";
}
function calculateLLCFee() {
    let fee = parseFloat(document.getElementById("llcType").value);
    let resultDiv = document.getElementById("result");
    if (isNaN(fee)) return;
    resultDiv.innerHTML = "Estimated State Filing Fee: $" + fee.toFixed(2);
    resultDiv.style.display = "block";
}
function calculateBusinessLicense() {
    let base = parseFloat(document.getElementById("bizType").value);
    let rev = parseFloat(document.getElementById("bizRev").value);
    let resultDiv = document.getElementById("result");
    if (isNaN(base)) return;
    let tax = (!isNaN(rev) && rev > 1000000) ? (rev * 0.00375) : 0;
    let total = base + tax;
    resultDiv.innerHTML = "Estimated State Fee: $" + total.toFixed(2) + " <br><span style='font-size:14px;color:#666;'>(Base: $" + base + " + Est. Franchise Tax: $" + tax.toFixed(2) + ")</span>";
    resultDiv.style.display = "block";
}
function calculateMarriageFee() {
    let fee = parseFloat(document.getElementById("countyFeeMarriage").value);
    let resultDiv = document.getElementById("result");
    if (isNaN(fee) || fee <= 0) fee = 72;
    resultDiv.innerHTML = "Estimated Marriage License Cost: $" + fee.toFixed(2);
    resultDiv.style.display = "block";
}
function calculateDBAFee() {
    let fee = parseFloat(document.getElementById("countyFeeDBA").value);
    let resultDiv = document.getElementById("result");
    if (isNaN(fee) || fee <= 0) fee = 20;
    resultDiv.innerHTML = "Estimated DBA Registration Cost: $" + fee.toFixed(2);
    resultDiv.style.display = "block";
}

// ===== 佛罗里达州 (Florida) 计算逻辑 =====
function calculateFLVehicleFee() {
    let fee = parseFloat(document.getElementById("flVehicleType").value);
    let resultDiv = document.getElementById("result");
    if (isNaN(fee)) return;
    resultDiv.innerHTML = "Estimated Florida Registration: $" + fee.toFixed(2);
    resultDiv.style.display = "block";
}
function calculateFLLLCFee() {
    let fee = parseFloat(document.getElementById("flLlcType").value);
    let resultDiv = document.getElementById("result");
    if (isNaN(fee)) return;
    resultDiv.innerHTML = "Estimated FL State Fee: $" + fee.toFixed(2);
    resultDiv.style.display = "block";
}
function calculateFLBusinessLicense() {
    let city = parseFloat(document.getElementById("flBizCity").value);
    let mult = parseFloat(document.getElementById("flBizType").value);
    let resultDiv = document.getElementById("result");
    if (isNaN(city) || isNaN(mult)) return;
    resultDiv.innerHTML = "Estimated Local License Fee: $" + (city * mult).toFixed(2);
    resultDiv.style.display = "block";
}
function calculateFLMarriageFee() {
    let fee = parseFloat(document.getElementById("flMarriage").value);
    let resultDiv = document.getElementById("result");
    if (isNaN(fee) || fee <= 0) fee = 93.25; // 佛州默认价格
    resultDiv.innerHTML = "Estimated FL Marriage License: $" + fee.toFixed(2);
    resultDiv.style.display = "block";
}
function calculateFLDBAFee() {
    let fee = parseFloat(document.getElementById("flDBA").value);
    let resultDiv = document.getElementById("result");
    if (isNaN(fee) || fee <= 0) fee = 50.00; // 佛州默认价格
    resultDiv.innerHTML = "Estimated Fictitious Name (DBA) Fee: $" + fee.toFixed(2);
    resultDiv.style.display = "block";
}