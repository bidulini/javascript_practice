function rightDiagonal() {

    let size = document.getElementById("size").value;

    let firstM = document.getElementById("firstMatrix").value.split(" ");
    let firstM1 = document.getElementById("firstMatrix1").value.split(" ");

    let matrix1 = [firstM, firstM1];

    let matrixDiagonal = [0, 0];

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            matrix1[i][j] = parseInt(matrix1[i][j]);
        }
    }


    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i === j) {
                matrixDiagonal[i] += matrix1[i][j];
            }
        }
    }
    let printAll = "The matrix is : ";

    for (let i = 0; i < size; i++) {
        printAll += "<br>"
        for (let j = 0; j < size; j++) {
            printAll += matrix1[i][j] + " ";
        }
    }

    printAll = printAll + "<br>The sum of the right diagonal of the matrix is:";

    for (let i = 0; i < size; i++) {
            printAll += "<br>"+matrixDiagonal[i] + " ";
        }
    

    document.getElementById("showResult").innerHTML = printAll;

}