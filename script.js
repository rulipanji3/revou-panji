document.addEventListener("DOMContentLoaded", function () {
    const sideLengthInput = document.getElementById("sideLength");
    const calculateButton = document.getElementById("calculate");
    const areaResult = document.getElementById("area");
    const perimeterResult = document.getElementById("perimeter");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const sideLength = parseFloat(sideLengthInput.value);

        if (!isNaN(sideLength) && sideLength > 0) {
            const area = sideLength * sideLength;
            const perimeter = 4 * sideLength;

            areaResult.textContent = area.toFixed(2); // Menampilkan hingga 2 desimal
            perimeterResult.textContent = perimeter.toFixed(2);
            resultDiv.style.display = "block";
        } else {
            alert("Masukkan panjang sisi yang valid.");
        }
    });
});
