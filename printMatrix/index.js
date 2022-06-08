function printMatrix() {

    let row1 = document.getElementById("matrixInput").value.split(" ");
    let row2 = document.getElementById("matrixInput1").value.split(" ");
    let row3 = document.getElementById("matrixInput2").value.split(" ");
    let printerFunction = "[";

    let matrixArray = [row1, row2, row3];

    for (let i = 0; i < matrixArray.length; i++) {
        printerFunction += "<br>";
        for (let j = 0; j < matrixArray[i].length; j++) {
            printerFunction += matrixArray[i][j] + " ";
        }

    }
    document.getElementById("printRow").innerHTML=printerFunction+"]";
}