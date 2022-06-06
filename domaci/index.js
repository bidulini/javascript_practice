function MonthNumber() {

    var month = document.getElementById("montnmr").value;
    var WriteSolution = document.getElementById("display");
    month = parseInt(month);



    if ((month === 1) || (month === 3) || (month === 5) || (month === 7) || (month === 8) || (month === 10) || (month === 12)) {
        WriteSolution.innerHTML = "The month has 31 days!";
    }
    else if (month === 4 || month === 6 || month === 9 || month === 11) {
        WriteSolution.innerHTML = "The month has 30 days!";
    }
    else if (month === 2) {
        WriteSolution.innerHTML = "Enter the year below!";
    }
}

function leapYear() {

    var year = document.getElementById("year").value;
    var leap = document.getElementById("leap");

    year = parseInt(year);

    if (year % 4 === 0) {
        leap.innerHTML = "Month has 29 days!";
    }
    else if (year % 4 !== 0) {
        leap.innerHTML = "Month has 28 days!"
    }
}

/* 1,3,5,7,8,10,12 = 31 dan; 2=28 dana, 4,6,9,11=30 dana*/