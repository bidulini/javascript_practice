let hour = 0;
let minute = 0;
let seconds = setInterval(() => {
    increase();
}, 1000);

const increase = () => {
    seconds++;
    if (seconds === 60) {
        minute++;
        seconds = 0;
    }
    if (minute === 60) {
        hour++;
        minute = 0;
    }
    if(minute<10)
    {
        document.getElementById("hour").innerHTML = hour + ":0" + minute + ":" + seconds;
    }
    else  document.getElementById("hour").innerHTML = hour + ":" + minute + ":" + seconds;
}

