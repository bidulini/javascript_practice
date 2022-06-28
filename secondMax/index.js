let array = [];
let length = 0;

const makeArray = () => {

    let number = document.getElementById("takeNumber").value;

    if (number === "end") {
        let max = array[0];
        let min = array[0];
    
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) max = array[i];
            if (array[i] < min) min = array[i];
        }
        for (let i = 0; i < array.length; i++) {
            if (array[i] === max) array[i] = min; 
        }
        let smax=array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > smax) smax = array[i];
        }
        document.getElementById("showSecondMax").innerHTML="Drugi najveci broj je: "+smax;
    }
    else {
        number = parseInt(number);
        array.push(number);
        length++;
    }
    return false;
    
    
}


