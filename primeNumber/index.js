
const checkNumber = () => {

    var number = document.getElementById("inputNumber").value;

    if (number === 0 || number === 1) {
        return document.getElementById("showResult").innerHTML = "The number is NOT a prime number!";
    }
    if ((number % 2 != 0 &&
        number % 3 != 0 &&
        number % 5 != 0 &&
        number % 7 != 0) && (number % number === 0 && number % 1 === 0)) {
        return document.getElementById("showResult").innerHTML = "The Number is PRIME number!";
    }
    else if (number % 2 === 0 ||
        number % 3 === 0 ||
        number % 5 === 0 ||
        number % 7 === 0) {
        return document.getElementById("showResult").innerHTML = "The Number is NOT a PRIME number!";
    }

}