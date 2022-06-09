function transpose() {

    let size = document.getElementById("size").value;

    let firstM = document.getElementById("firstMatrix").value.split(" ");
    let firstM1 = document.getElementById("firstMatrix1").value.split(" ");
    
    let matrix1 = [firstM, firstM1];

    let matrixTran = [[0, 0], [0, 0]];

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            matrix1[i][j] = parseInt(matrix1[i][j]);
        }
    }


    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            matrixTran[i][j] = matrix1[j][i];
        }
    }
    let printAll="The First matrix is : ";
     
    for (let i = 0; i < size; i++) {
        printAll+="<br>"
        for (let j = 0; j < size; j++) {
            printAll+=matrix1[i][j]+" ";
        }
    }
     
    printAll=printAll+"<br>The Transpose of the matrix is:"

    for (let i = 0; i < size; i++) {
        printAll+="<br>"
        for (let j = 0; j < size; j++) {
            printAll+=matrixTran[i][j]+" ";
        }
    }

    document.getElementById("showResult").innerHTML=printAll;

}