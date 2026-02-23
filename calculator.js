/* js/calculator.js */
function calculateVehicleFee() {
    // 获取选择的车辆类型对应的值
    let fee = parseFloat(document.getElementById("vehicleType").value);
    let resultDiv = document.getElementById("result");
    
    // 如果没有选择或出错
    if (isNaN(fee)) {
        resultDiv.innerHTML = "Please select a valid vehicle type.";
        resultDiv.style.display = "block";
        return;
    }

    // 格式化输出结果
    resultDiv.innerHTML = "Estimated Total Fee: $" + fee.toFixed(2);
    resultDiv.style.display = "block";
}