function sumIt()
{
    var inputNumber = document.getElementById("nmbr").value;

    var numberArray = inputNumber.split(" ");

    for (let index = 0; index < numberArray.length; index++) {
        numberArray[index] = parseInt(numberArray[index]);
    }

    var sum = 0;

    for (let index = 0; index < numberArray.length; index++) {
        sum = sum + numberArray[index];
    }

    if (sum > 0) {
        document.getElementById("displaySolution").innerHTML = "Suma brojeva = " + sum + " je pozitivna.";
    }
    else if (sum < 0) {
        document.getElementById("displaySolution").innerHTML = "Suma brojeva = " + sum + " je negativna.";
    }
    else {
        document.getElementById("displaySolution").innerHTML = "Suma brojeva = " + sum + " je jednaka nuli.";

    }
}