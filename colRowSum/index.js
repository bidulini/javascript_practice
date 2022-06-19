const rowColSum = () => {

    let fir1 = document.getElementById("firstMatrix").value.split(" ");
    let fir2 = document.getElementById("firstMatrix1").value.split(" ");
    let fir3 = document.getElementById("firstMatrix2").value.split(" ");

    let matrix = [fir1, fir2, fir3];

    let rowSum = [0,0,0];

    document.getElementById("showResult").innerHTML = "The matrix is:<br>";
    for (let i = 0; i < 3; i++) {
        document.getElementById("showResult").innerHTML +="<br>";
        for (let j = 0; j < 3; j++) {
            document.getElementById("showResult").innerHTML += matrix[i][j]+" ";
        }
    }
    document.getElementById("showResult").innerHTML += "<br><br>The sum or rows and columns of the matrix is :<br>"

    for (let i = 0; i < 3; i++) {
        
        for (let j = 0; j < 3; j++) {
        rowSum[i] += parseInt(matrix[i][j]);
    }}

    for (let i = 0; i < 3; i++) {
        document.getElementById("showResult").innerHTML +="<br>"+rowSum[i];
    }




}