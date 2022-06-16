const findNumbers = () => {

    let inputNumbers = document.getElementById("inputNumbers").value;
    let inputArray = inputNumbers.split(" ");

    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            if (inputArray[i] === inputArray[j]) {
                document.getElementById("showResult").innerHTML+= inputArray[i]+" ";
            }

        }
    }
}