let array = [];
let length = 0;

const fillArray = () => {

    let input = document.getElementById("number").value;
    number = parseInt(input);

    if ((number % 5) === 0 && (number % 3) === 0) {

        array.push(number + "<span style='color:blue'>" + " - FizzBuzz" + "</span>");
        length++;
                for (let i = 0; i < array.length; i++) {
            document.getElementById("showResult").innerHTML += array[i]+ "<br>";
        }
    }
    else if ((number % 5) !== 0 && (number % 3) !== 0) {

        array.push(number);
        length++;
    }
    else if (number % 3 === 0) {

        array.push(number + "<span style='color:green'>" + " - Fizz" + "</span>");
        length++;
    }
    else if (number % 5 === 0) {

        array.push(number + "<span style='color:red'>" + " - Buzz" + "</span>");
        length++;
    }

    return false;
}