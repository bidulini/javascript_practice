function multiply() {

    let size = document.getElementById("size").value;

    let firstM = document.getElementById("firstMatrix").value.split(" ");
    let firstM1 = document.getElementById("firstMatrix1").value.split(" ");
    let secondM = document.getElementById("secondMatrix").value.split(" ");
    let secondM1 = document.getElementById("secondMatrix1").value.split(" ");

    let matrix1 = [firstM, firstM1];
    let matrix2 = [secondM, secondM1];

    let matrixMul = [[0, 0], [0, 0]];

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            matrix1[i][j] = parseInt(matrix1[i][j]);
            matrix2[i][j] = parseInt(matrix2[i][j]);
        }
    }


    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            matrixMul[i][j] = matrix1[i][j] * matrix2[i][j];
        }
    }
    let printAll="The First matrix is : ";
     
    for (let i = 0; i < size; i++) {
        printAll+="<br>"
        for (let j = 0; j < size; j++) {
            printAll+=matrix1[i][j]+" ";
        }
    }
     
    printAll=printAll+"<br>The Second Matrix is: "

    for (let i = 0; i < size; i++) {
        printAll+="<br>"
        for (let j = 0; j < size; j++) {
            printAll+=matrix2[i][j]+" ";
        }
    }
     
    printAll=printAll+"<br>The Subtraction of two matrix is:"

    for (let i = 0; i < size; i++) {
        printAll+="<br>"
        for (let j = 0; j < size; j++) {
            printAll+=matrixMul[i][j]+" ";
        }
    }

    document.getElementById("showResult").innerHTML=printAll;

}